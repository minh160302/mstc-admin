import { createStyles, makeStyles } from "@material-ui/core"
import Button from "components/CustomButtons/Button";
import React, { useState, useEffect, useLayoutEffect } from "react"
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from "./tools"

const useStyles = makeStyles(() => createStyles({
  editorContainer: {
    width: "100%",
    minHeight: "400px",
    marginTop: 40,
    border: "1px solid #00000026"
  }
}))

interface TextEditorProps {
  textEditor: any;
  setTextEditor: React.Dispatch<React.SetStateAction<any>>;
  initialState: any;
}

const TextEditor: React.FC<TextEditorProps> = (props) => {
  const { textEditor, setTextEditor, initialState } = props

  const classes = useStyles();

  const [editorInstance, setEditorInstance] = useState();

  // useLayoutEffect(() => {
  //   setTextEditor(initialState)
  // }, [initialState])

  const handleChange = async () => {
    const saved = await editorInstance.save();
    console.log(saved)
    setTextEditor(saved)
  }

  return (
    <div className={classes.editorContainer}>
      <EditorJs
        holder="editorjs"
        data={initialState}
        tools={EDITOR_JS_TOOLS}
        onChange={handleChange}
        onReady={() => {
          console.log("Editor is ready!")
        }}
        instanceRef={(instance) => setEditorInstance(instance)}
      >
        <div id="editorjs"></div>
      </EditorJs>
    </div>
  )
}

export default TextEditor;