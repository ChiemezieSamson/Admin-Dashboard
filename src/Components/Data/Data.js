import {
	MdAnalytics,
	MdAttachMoney,
	MdDashboard,
	MdHelpCenter,
	MdOutlineSettings,
	MdPeople,
	MdPlayCircleFilled,
	MdReadMore,
	MdShoppingBag,
	MdSupervisedUserCircle,
	MdWork,
} from "react-icons/md";

import avatar from "./../../../public/noavatar.png";
import noproduct from "./../../../public/noproduct.jpg";
import rightbarImage from "./../../../public/astronaut.png";

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
		status: "pending",
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
		status: "pending",
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

export const chartData = [
	{
		name: "Sun",
		visit: 4000,
		click: 2400,
	},
	{
		name: "Mon",
		visit: 3000,
		click: 1398,
	},
	{
		name: "Tue",
		visit: 2000,
		click: 3800,
	},
	{
		name: "Wed",
		visit: 2780,
		click: 3908,
	},
	{
		name: "Thu",
		visit: 1890,
		click: 4800,
	},
	{
		name: "Fri",
		visit: 2390,
		click: 3800,
	},
	{
		name: "Sat",
		visit: 3490,
		click: 4300,
	},
];

export const rightbarItems = [
	{
		id: 0,
		image: rightbarImage,
		notifiation: "🔥 Available Now",
		title: "How to use the new version of the admin dashboard?",
		subtitle: "Takes 4 minutes to learn",
		text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus",
		button: {
			text: "Watch",
			icon: <MdPlayCircleFilled />,
		},
	},
	{
		id: 1,
		notifiation: "🚀 Coming Soon",
		title: "New server action are available, pre-rendering is coming up",
		subtitle: "Boost your productivity",
		text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus",
		button: {
			text: "Learn",
			icon: <MdReadMore />,
		},
	},
];

export const usersItem = [
	{
		id: 0,
		name: "hello",
		avatar: avatar,
		email: "hello@gmailcom",
		date: "Oct 30 2023",
		role: "client",
		status: "passive",
	},
	{
		id: 1,
		name: "jane",
		avatar: avatar,
		email: "janedoe@gmailcom",
		date: "Oct 29 2023",
		role: "client",
		status: "active",
	},
	{
		id: 2,
		name: "hello",
		avatar: avatar,
		email: "hello@gmailcom",
		date: "Oct 30 2023",
		role: "client",
		status: "passive",
	},
	{
		id: 3,
		name: "jane",
		avatar: avatar,
		email: "janedoe@gmailcom",
		date: "Oct 29 2023",
		role: "client",
		status: "active",
	},
];

export const prodctsItem = [
	{
		id: 0,
		avatar: noproduct,
		title: "Iphone",
		description: "dvfsdgfdshghsdfhretsafgsdgsdfagwgdsgsdgdsg",
		price: "$123",
		Created_At: "Oct 20 2023",
		Stock: "34",
	},
	{
		id: 2,
		avatar: noproduct,
		title: "Ig monitor",
		description: "dvfsdgfdshghsdfhretsafgsdgsdfagwgdsgsdgdsg",
		price: "$123",
		Created_At: "Oct 20 2023",
		Stock: "34",
	},
];

export const addProductSeleteOptionItems = ["kitchen", "phone", "computer"];
