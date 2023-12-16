import { IconType } from "react-icons";
import {MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdOutlineSettings, MdPeople, MdShoppingBag, MdSupervisedUserCircle, MdWork} from "react-icons/md";

type menuListItems = {
  title: string
  path: string
  icon: IconType
}

type allItems = {
  title: string
  list: menuListItems[]
}

type Item = allItems[]

export const menuItems: Item = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: MdDashboard ,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: MdSupervisedUserCircle,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: MdShoppingBag,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: MdAttachMoney,
      },
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: MdWork,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: MdAnalytics,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: MdPeople,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: MdOutlineSettings,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: MdHelpCenter,
      },
    ],
  },
]