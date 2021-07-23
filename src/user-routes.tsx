// @material-ui/icons
import AssignmentIcon from '@material-ui/icons/Assignment';
import EmailIcon from '@material-ui/icons/Email';
// components
import { ROUTE_PATH } from "utils/constants";
import Article from "views/pages/user/article/Management";
import EmailManagement from 'views/pages/user/email/EmailManagement';


const dashRoutes = [
  {
    path: "/article",
    name: "Bài viết",
    component: Article,
    layout: ROUTE_PATH.USER,
    // icon: <AssignmentIcon />
  },
  {
    path: "/email",
    name: "Quản lý Email",
    component: EmailManagement,
    layout: ROUTE_PATH.USER,
    // icon: <EmailIcon />
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
