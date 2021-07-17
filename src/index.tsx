import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import setUpAxiosInterceptors from "store/utils/axios-interceptor"
import App from "./app"

import initStore from "./store/root/store"

setUpAxiosInterceptors(() => console.log("axios error"))

const store = initStore();

ReactDOM.render(
  <div>
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  </div>,
  document.getElementById("root")
)

