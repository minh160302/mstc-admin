import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


import setUpAxiosInterceptors from "store/utils/axios-interceptor"
import App from "./app"

import initStore from "./store/root/store"

setUpAxiosInterceptors(() => console.log("axios error"))

const store = initStore();

ReactDOM.render(
  <>
    <ToastContainer
      position={toast.POSITION.TOP_RIGHT}
      className="toastify-container"
      toastClassName="toastify-toast"
    />
    <div>
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    </div>
  </>,
  document.getElementById("root")
)

