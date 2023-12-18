import {
	MdAnalytics,
	MdAttachMoney,
	MdDashboard,
	MdHelpCenter,
	MdOutlineSettings,
	MdPeople,
	MdShoppingBag,
	MdSupervisedUserCircle,
	MdWork,
} from "react-icons/md";

import avatar from "./../../../public/noavatar.png";

export const menuItems = [
	{
		title: "Pages",
		list: [
			{
				title: "Dashboard",
				path: "/dashboard",
				icon: <MdDashboard />,
			},
			{
				title: "Users",
				path: "/dashboard/users",
				icon: <MdSupervisedUserCircle />,
			},
			{
				title: "Products",
				path: "/dashboard/products",
				icon: <MdShoppingBag />,
			},
			{
				title: "Transactions",
				path: "/dashboard/transactions",
				icon: <MdAttachMoney />,
			},
		],
	},
	{
		title: "Analytics",
		list: [
			{
				title: "Revenue",
				path: "/dashboard/revenue",
				icon: <MdWork />,
			},
			{
				title: "Reports",
				path: "/dashboard/reports",
				icon: <MdAnalytics />,
			},
			{
				title: "Teams",
				path: "/dashboard/teams",
				icon: <MdPeople />,
			},
		],
	},
	{
		title: "User",
		list: [
			{
				title: "Settings",
				path: "/dashboard/settings",
				icon: <MdOutlineSettings />,
			},
			{
				title: "Help",
				path: "/dashboard/help",
				icon: <MdHelpCenter />,
			},
		],
	},
];

export const cardItems = [
	{
		_id: 0,
		title: "Total Users",
		figure: "10.273",
		detail: {
			percent: "12%",
			text: "more than previous week",
		},
		icon: <MdSupervisedUserCircle />,
	},
	{
		_id: 1,
		title: "Total Users",
		figure: "10.273",
		detail: {
			percent: "12%",
			text: "more than previous week",
		},
		icon: <MdSupervisedUserCircle />,
	},
	{
		_id: 2,
		title: "Total Users",
		figure: "10.273",
		detail: {
			percent: "12%",
			text: "more than previous week",
		},
		icon: <MdSupervisedUserCircle />,
	},
];

export const transactionTableItems = [
	{
		id: 0,
		image: avatar,
		status: "Pending",
		date: "14.02.2024",
		amount: "$3.200",
	},
	{
		id: 1,
		image: avatar,
		status: "done",
		date: "14.02.2024",
		amount: "$3.200",
	},
	{
		id: 2,
		image: avatar,
		status: "cancelled",
		date: "14.02.2024",
		amount: "$3.200",
	},
	{
		id: 3,
		image: avatar,
		status: "Pending",
		date: "14.02.2024",
		amount: "$3.200",
	},
	{
		id: 4,
		image: avatar,
		status: "done",
		date: "14.02.2024",
		amount: "$3.200",
	},
];
