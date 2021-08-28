import { ROUTE_PATH } from "utils/constants";
import LoginPage from "./views/pages/auth/LoginPage"
// import RegisterPage from "./views/pages/auth/RegisterPage"

const dashRoutes = [
  {
    path: '/login',
    name: 'Log In',
    component: LoginPage,
    layout: ROUTE_PATH.AUTH,
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: RegisterPage,
  //   layout: ROUTE_PATH.AUTH,
  // },
];
export default dashRoutes;
