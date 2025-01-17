import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideMenuData = [
  {
    title: "Inventory",
    path: "/inventory",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Accounting",
    path: "/accounting",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Diagnose",
    path: "/diagnose",
    icon: <IoIcons.IoIosAlarm />,
    cName: "nav-text"
  }
//   {
//     title: "Products",
//     path: "/products",
//     icon: <FaIcons.FaCartPlus />,
//     cName: "nav-text"
//   },
//   {
//     title: "Team",
//     path: "/team",
//     icon: <IoIcons.IoMdPeople />,
//     cName: "nav-text"
//   },
//   {
//     title: "Messages",
//     path: "/",
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: "nav-text"
//   },
//   {
//     title: "Support",
//     path: "/support",
//     icon: <IoIcons.IoMdHelpCircle />,
//     cName: "nav-text"
//   }
];
