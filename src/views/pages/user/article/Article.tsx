import React, { useEffect, useLayoutEffect, useState } from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card"
import TextEditor from "components/TextEditor/TextEditor";
import { createStyles, makeStyles, TextField } from "@material-ui/core";
import FormSelect from "components/Select/FormSelect";
import { createArticle, updateArticle } from "store/actions/article"
import { IRootState } from "store/reducers";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => createStyles({
  cardContainer: {
    paddingBottom: 30,
    paddingTop: 30
  },
  inputContainer: {
    padding: "15px 30px",
    alignItems: "center"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
}))

function xoa_dau(str) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  return str;
}


// redux typescript
interface StateProps {
  article: any;
}

interface DispatchProps {
  createArticle: (params: any) => any;
  updateArticle: (params: any) => any;
}

interface ArticleProps {
  handleCancelAdd: () => void;
  isEdit: boolean;
}

type Props = StateProps & DispatchProps & ArticleProps


const Article: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { handleCancelAdd, isEdit } = props

  const [invalid, setInvalid] = useState({
    title: false,
    slug: false,
    description: false,
    status: false
  })

  const [formValue, setFormValue] = useState({
    title: "",
    slug: "",
    description: "",
  })

  const handleChange = (event) => {
    setInvalid({
      ...invalid,
      [event.target.name]: false
    })
    if (event.target.name === "title") {
      setFormValue({
        ...formValue,
        title: event.target.value,
        slug: xoa_dau(event.target.value.toLowerCase()).split(" ").join("-")
      })
    } else {
      setFormValue({
        ...formValue,
        [event.target.name]: event.target.value
      })
    }
  }


  // select status
  const [option, setOption] = useState("")

  const options = [
    {
      title: "Published",
      value: "PUBLISHED"
    },
    {
      title: "Trending",
      value: "TRENDING"
    },
    {
      title: "Archived",
      value: "ARCHIVED"
    },
  ]

  const onOptionChange = (event) => {
    setOption(event.target.value)
    setInvalid({
      ...invalid,
      status: false
    })
  }

  // article state
  const [textEditor, setTextEditor] = useState({})
  const [initialState, setInitialState] = useState({})

  // save article
  const handleSave = () => {
    console.log(formValue)
    console.log(option)
    console.log(textEditor)

    const data: any = {
      ...formValue,
      content: JSON.stringify(textEditor),
      status: option,
    }

    const invalidInput = Object.keys(data).filter(key => data[key] === "")
    if (invalidInput.length === 0) {
      if (isEdit) {
        data.id = props.article.id
        props.updateArticle(data);
      } else {
        props.createArticle(data)
      }
    } else {
      console.log(invalidInput)
      let invalidKeys = { ...invalid }
      invalidInput.map(item => invalidKeys[item] = true)

      console.log(invalidKeys)
      setInvalid(invalidKeys)
    }
  }

  useEffect(() => {
    if (isEdit) {
      const defaultValue = {
        title: props.article.title,
        slug: props.article.slug,
        description: props.article.description,
        // createdDate: props.article.created_date,
        // updatedDate: props.article.updated_date,
      }

      setFormValue(defaultValue)
      setOption(props.article.status)
    }
  }, [props.article])


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} className={classes.cardContainer}>
        <div>
          <GridContainer className={classes.inputContainer}>
            <GridItem xs={12} sm={12} md={12} className={classes.buttonContainer}>
              <Button color="facebook" round onClick={handleSave}>
                Thêm
              </Button>
              <Button color="warning" round onClick={handleCancelAdd}>
                Huỷ
              </Button>
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.inputContainer}>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                required
                error={invalid.title}
                InputLabelProps={{
                  draggable: false
                }}
                id="outlined-required"
                label="Title"
                name="title"
                value={formValue.title}
                // defaultValue="Hello World"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                required
                error={invalid.slug}
                InputLabelProps={{
                  draggable: false
                }}
                id="outlined-required"
                label="Slug"
                name="slug"
                value={formValue.slug}
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.inputContainer}>
            <GridItem xs={12} sm={6} md={6}>
              <TextField
                required
                error={invalid.description}
                InputLabelProps={{
                  draggable: false
                }}
                id="outlined-required"
                label="Description"
                name="description"
                value={formValue.description}
                // defaultValue="Hello World"
                variant="outlined"
                fullWidth
                onChange={handleChange}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              {/* select components */}
              <FormSelect
                error={invalid.status}
                label="Status"
                onChange={onOptionChange}
                value={option}
                options={options}
              />
            </GridItem>
          </GridContainer>
        </div>
        <div>
          <GridItem xs={12} sm={12} md={12}>
            {isEdit === false
              ? <TextEditor initialState={{ time: Date.now(), blocks: [], version: "2.22.1" }}
                textEditor={textEditor}
                setTextEditor={setTextEditor}
              />
              : <>
                {
                  props.article.content && <TextEditor
                    textEditor={textEditor}
                    setTextEditor={setTextEditor}
                    initialState={props.article.content}
                  />
                }
              </>
            }
          </GridItem>
        </div>
      </GridItem>
    </GridContainer>
  )
}


const mapStateToProps = ({ article }: IRootState) => {
  return {
    article: article.article
  }
}

const mapDispatchToProps = {
  createArticle,
  updateArticle
}

export default connect<StateProps, DispatchProps, ArticleProps>(mapStateToProps, mapDispatchToProps)(Article)