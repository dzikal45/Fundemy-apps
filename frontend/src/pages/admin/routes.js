import Index from "../admin/views/Index";
import Student from "./views/examples/Student.js";
import Teacher from "../admin/views/examples/Teacher.js";
import Course from "../admin/views/examples/Course";
import Invoice from "../admin/views/examples/Invoice"
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/teacher",
    name: "Teacher",
    icon: "ni ni-planet text-blue",
    component: Teacher,
    layout: "/admin",
  },
 
  {
    path: "/student",
    name: "Students",
    icon: "ni ni-bullet-list-67 text-red",
    component: Student,
    layout: "/admin",
  },
  {
    path: "/course",
    name: "Course",
    icon: "ni ni-single-copy-04 text-green",
    component: Course,
    layout: "/admin",
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: "ni ni-single-copy-04 text-green",
    component: Invoice,
    layout: "/admin",
  },
];
export default routes;
