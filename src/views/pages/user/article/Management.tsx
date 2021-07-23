import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useLayoutEffect, useState } from "react";
import classNames from "classnames"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card"
import MaterialTable from "material-table"

// @material-ui/icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";

// redux
import { connect } from "react-redux";
import { IRootState } from "store/reducers";
import { getArticles, getArticleById, cleanUpArticle, deleteArticle } from "store/actions/article"
import Article from "./Article";

const useStyles = makeStyles((theme: Theme) => createStyles({
  cardContainer: {
    paddingBottom: 30,
    // paddingTop: 30
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  textName: {
    fontSize: 14,
    lineHeight: "16px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  gridTitle: {
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBtn: {
    textTransform: "uppercase",
    background: "#3b5998",
    borderRadius: 4,
    fontSize: 14,
    lineHeight: "16px",
    marginRight: "20px",
    "&:hover": {
      background: "#3b5998",
      opacity: 0.8,
    },
    "&:focus": {
      background: "#3b5998",
    },
  },
  status: {
    fontSize: 14,
    lineHeight: "16px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 6,
    borderRadius: 6
  },
  ARCHIVED_status: {
    background: "#dc3c3c",
    color: "#ffffff"
  },
  PUBLISHED_status: {
    background: "#2196f3",
    color: "#ffffff"
  },
  TRENDING_status: {
    background: "#4caf50",
    color: "#ffffff"
  },
}))

// redux typescript
interface StateProps {
  isAuthenticated: boolean;
  data: Array<any>;
  page: number;
  size: number;
  total: number;
  article: any;
  isDeleted: boolean;
}

interface DispatchProps {
  getArticles: (params: any) => any;
  getArticleById: (params: string) => any;
  cleanUpArticle: () => any;
  deleteArticle: (params: string) => any;
}

interface ArticleProps { }

type Props = StateProps & DispatchProps & ArticleProps

const Management: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [displayAdd, setDisplayAdd] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  // const [isDelete, setIsDelete] = useState(false)

  useEffect(() => {
    props.getArticles({ page: 1, size: 10 })
  }, [props.isAuthenticated])

  const handleAddArticle = () => {
    setIsEdit(false)
    props.cleanUpArticle();
    setDisplayAdd(true)
  }

  const handleCancelAdd = () => {
    setDisplayAdd(false)
  }

  const onChangePage = (page, size) => {
    props.getArticles({ page: page + 1, size: size });
  };

  const handleEdit = async (id) => {
    props.cleanUpArticle()
    setIsEdit(true)
    await props.getArticleById(id);
    setDisplayAdd(true)
  }

  const handleDelete = async (id) => {
    props.deleteArticle(id);
  }

  useLayoutEffect(() => {
    props.getArticles({ page: 1, size: 10 })
  }, [props.isDeleted])

  useEffect(() => {
    props.getArticles({ page: 1, size: 10 })
  }, [displayAdd])

  const columns = [
    {
      field: "slug",
      title: "Đường link",
      cellStyle: { width: 100 },
      tableData: { width: 100 },
      render: (record) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{record.slug}</div>
        </div>
      ),
    },
    {
      field: "title",
      title: "Tên",
      render: (record) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{record.title}</div>
        </div>
      ),
    },
    {
      field: "description",
      title: "Mô tả",
      render: (record) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{record.description}</div>
        </div>
      ),
    },
    {
      field: "status",
      title: "Trạng thái",
      render: (record) => (
        <div className={classes.alignItemsCenter}>
          <div className={classNames({
            [classes.status]: true,
            [classes[`${record.status}_status`]]: true
          })}>{record.status}</div>
        </div>
      ),
    },
    {
      field: "created_date",
      title: "Ngày tạo",
      render: (record) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{record.created_date}</div>
        </div>
      ),
    },
    {
      field: "image_url",
      title: "Ảnh thumbnail",
      render: (record) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>
            {record.image_url && (
              // <img src={record.image_url} style={{ width: 70 }} />
              <div>{record.image_url}</div>
            )}
          </div>
        </div>
      ),
    },
    {
      field: "id",
      title: "Hành động",
      cellStyle: { width: 150 },
      tableData: { width: 150 },
      render: (record) => (
        <div>
          <Button
            justIcon
            color="facebook"
            round
            onClick={() => {
              handleEdit(record.id)
            }}
          >
            <EditIcon />
          </Button>
          <Button
            justIcon
            color="danger"
            round
            onClick={() => {
              handleDelete(record.id)
            }}
          >
            <DeleteIcon />
          </Button>
        </div>
      ),
    },
  ];


  console.log(props)
  return (
    <GridContainer>
      <Card className={classes.cardContainer}>
        {
          displayAdd === false
            ? <MaterialTable
              title="Danh sách bài đăng"
              data={props.data}
              totalCount={props.total}
              columns={columns}
              options={{
                search: false,
                draggable: true,
                pageSize: props.size || 10,
                pageSizeOptions: [10, 20, 30]
              }}
              components={{
                Toolbar: (props) => (
                  <div className={classes.gridTitle}>
                    <Button
                      className={classes.headerBtn}
                      onClick={handleAddArticle}
                    >
                      <AddIcon />
                      Thêm mới
                    </Button>
                  </div>
                ),
              }}
              onChangePage={onChangePage}
            />
            : <>
              <Article isEdit={isEdit} handleCancelAdd={handleCancelAdd} />
            </>
        }
      </Card>
    </GridContainer>
  )
}

const mapStateToProps = ({ article, authentication }: IRootState) => {
  return {
    isAuthenticated: authentication.isAuthenticated,
    data: article.articles,
    page: article.page,
    size: article.size,
    total: article.total,
    article: article.article,
    isDeleted: article.isDeleted
  }
}

const mapDispatchToProps = {
  getArticles,
  getArticleById,
  cleanUpArticle,
  deleteArticle
}

export default connect<StateProps, DispatchProps, ArticleProps>(mapStateToProps, mapDispatchToProps)(Management)