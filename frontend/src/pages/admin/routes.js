import Index from "views/Index.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Course from "views/examples/Course";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Teacher",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
 
  {
    path: "/tables",
    name: "Students",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/course",
    name: "Course",
    icon: "ni ni-single-copy-04 text-green",
    component: Course,
    layout: "/admin",
  },
];
export default routes;
