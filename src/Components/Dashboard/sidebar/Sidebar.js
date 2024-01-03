import { menuItems } from "@/Components/Data/Data";
import Image from "next/image";
import Avatar from "./../../../../public/noavatar.png";
import MenuLink from "./menuLink/MenuLink";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import { auth } from "@/app/auth";

const Sidebar = async () => {
	const session = await auth();
	console.log(session);
	return (
		<div className="sticky top-10 ">
			<figure className="grid grid-flow-col items-center gap-x-5 mb-5 max-w-[240px]">
				<Image
					src={Avatar}
					alt=""
					className="w-12 h-12 rounded-full object-cover"
				/>
				<figcaption className="grid grid-flow-row">
					<span className="font-medium">John Doe</span>
					<span className="text-sm textSoft">Administrator</span>
				</figcaption>
			</figure>
			<ul className="">
				{menuItems.map((item) => {
					return (
						<li key={item.title}>
							<span className="textsoft font-medium text-[13px] my-2.5">
								{item.title}
							</span>

							<div>
								{item.list.map((links) => {
									return <MenuLink key={links.title} item={links} />;
								})}
							</div>
						</li>
					);
				})}
			</ul>
			<Link href={"/login"}>
				<button className="p-5 hover:bg-[#2e374a] my-1.5 rounded-[10px] cursor-pointer bg-transparent border-0 w-full text-white">
					<span className="grid grid-flow-col items-center gap-x-5 max-w-[100px]">
						<MdLogout />
						Logout
					</span>
				</button>
			</Link>
		</div>
	);
};

export default Sidebar;
