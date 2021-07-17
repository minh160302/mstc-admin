// @material-ui/icons


// components
import { ROUTE_PATH } from "utils/constants";
import Article from "views/pages/user/article/Management";


const dashRoutes = [
  {
    path: "/article",
    name: "Bài viết",
    component: Article,
    layout: ROUTE_PATH.USER,
  },
  // {
  //   collapse: true,
  //   name: "Quản lý tài khoản",
  //   icon: UserIcon,
  //   state: "accountCollapse",
  //   layout: "/user",
  //   views: [
  //     {
  //       path: "/customer",
  //       name: "Khách hàng",
  //       component: CustomerManagement,
  //       layout: "/user",
  //     },
  //     {
  //       path: "/system-account",
  //       name: "Hệ thống",
  //       component: SystemManagement,
  //       layout: "/user",
  //     },
  //   ],
  // },

  // {
  //   path: "/profile",
  //   name: "User Profile",
  //   component: Profile,
  //   layout: "/user",
  //   hidden: true,
  //   redirect: true,
  // },
];

export default dashRoutes;
