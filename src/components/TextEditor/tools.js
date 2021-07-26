import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import Code from "@editorjs/code";
// import LinkTool from '@editorjs/link'
import Image from "@editorjs/image";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
// import InlineCode from '@editorjs/inline-code'
import SimpleImage from "@editorjs/simple-image";

import axios from "axios";

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  code: Code,
  // linkTool: LinkTool,
  image: {
    class: Image,
    inlineToolbar: true,
    config: {
      uploader: {
        uploadByFile(file) {
          let reader = new FileReader();
          const formData = new FormData();
          formData.append("file", file);
          return axios
            .post(`/api/upload`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((json) => {
              return {
                success: 1,
                file: {
                  url: json.data.path,
                  // any other image data you want to store, such as width, height, color, extension, etc
                },
              };
            });
        },
      },
    },
  },
  raw: Raw,
  header: {
    class: Header,
    inlineToolbar: true
  },
  quote: {
    class: Quote,
    inlineToolbar: true
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true
  },
  delimiter: {
    class: Delimiter,
    inlineToolbar: true,
  },
  // inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
