"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
	const pathname = usePathname();

	return (
		<Link
			href={item.path}
			className={`p-5 hover:bg-[#2e374a] my-1.5 rounded-[10px] cursor-pointer block ${
				pathname === item.path && "bg-[#2e374a]"
			}`}
		>
			<div className="grid grid-flow-col items-center gap-x-5 max-w-[100px]">
				<span>{item.icon}</span>
				<span>{item.title}</span>
			</div>
		</Link>
	);
};

export default MenuLink;
