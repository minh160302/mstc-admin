import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useLayoutEffect, useState } from "react";
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
import EmailIcon from '@material-ui/icons/Email';
import CircularProgress from '@material-ui/core/CircularProgress';


import { IRootState } from "store/reducers";
import { connect } from "react-redux";
import { getEmails, deleteEmail, createEmail, sendEmail } from "store/actions/emails"
import EmailDialog from "./EmailDialog";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: 15,
    marginTop: 15
  },
  cardContainer: {
    padding: 15
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
  rootProgress: {
    width: "20px !important",
    height: "20px !important",
    marginRight: 10
  },
}))

interface StateProps {
  isAuthenticated: boolean;
  data: Array<any>;
  page: number;
  size: number;
  total: number;
  email: any;
  isDeleted: boolean;
  sending: boolean;
};

interface DispatchProps {
  getEmails: (params: any) => any;
  deleteEmail: (params: any) => any;
  createEmail: (params: any) => any;
  sendEmail: (params: Array<string>) => any;
};

interface EmailProps { };

type Props = StateProps & DispatchProps & EmailProps;

const EmailManagement: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("")
  const [rows, setRows] = useState([])

  const handleChange = (event) => {
    setEmail(event.target.value)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleAddEmail = () => {
    props.createEmail({ email })
    setEmail("")
    setOpen(false);
  }

  const handleSelectionChange = (rows) => {
    setRows(rows)
  }

  const handleSend = () => {
    if (rows.length > 0) {
      console.log(rows)
      const sendRequest = rows.map(row => { return row.email })
      props.sendEmail(sendRequest)
    }
  }

  useEffect(() => {
    props.getEmails({ page: 1, size: 10 })
  }, [props.isAuthenticated])

  useLayoutEffect(() => {
    props.getEmails({ page: 1, size: 10 })
  }, [props.isDeleted, props.email])

  const onChangePage = (page, size) => {
    props.getEmails({ page: page + 1, size: size });
  };

  const handleDelete = (id) => {
    props.deleteEmail(id);
  }

  const columns = [
    {
      field: "email",
      title: "Email",
      cellStyle: { width: 100 },
      tableData: { width: 100 },
      render: (record) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{record.email}</div>
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
      field: "id",
      title: "Hành động",
      cellStyle: { width: 150 },
      tableData: { width: 150 },
      render: (record) => (
        <div>
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

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} className={classes.root}>
        <Card className={classes.cardContainer}>
          <MaterialTable
            title="Danh sách người dùng đã đăng kí nhận email"
            data={props.data}
            totalCount={props.total}
            columns={columns}
            options={{
              search: false,
              draggable: true,
              pageSize: props.size || 10,
              pageSizeOptions: [10, 20, 30],
              selection: true,
            }}
            onSelectionChange={handleSelectionChange}
            // detailPanel
            components={{
              Toolbar: (values) => (
                <div className={classes.gridTitle}>
                  <Button
                    className={classes.headerBtn}
                    onClick={handleOpen}
                  >
                    <AddIcon />
                    Thêm mới
                  </Button>
                  <Button
                    className={classes.headerBtn}
                    onClick={handleSend}
                    disabled={props.sending}
                  >
                    {props.sending === true
                      ? <CircularProgress color="inherit" className={classes.rootProgress} />
                      : <EmailIcon />}
                    Gửi email
                  </Button>
                </div>
              ),
            }}
            onChangePage={onChangePage}
          />
          <EmailDialog
            open={open}
            handleClose={handleClose}
            handleSubmit={handleAddEmail}
            email={email}
            handleChange={handleChange}
          />
        </Card>
      </GridItem>
    </GridContainer>
  )
}


const mapStateToProps = ({ authentication, emails }: IRootState) => {
  return {
    isAuthenticated: authentication.isAuthenticated,
    data: emails.emails,
    page: emails.page,
    size: emails.size,
    total: emails.total,
    email: emails.email,
    isDeleted: emails.isDeleted,
    sending: emails.sending,
  }
}

const mapDispatchToProps = {
  getEmails,
  deleteEmail,
  createEmail,
  sendEmail
}

export default connect<StateProps, DispatchProps, EmailProps>(mapStateToProps, mapDispatchToProps)(EmailManagement);