"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="grid grid-flow-col justify-between items-center rounded-lg p-2.5 bgSoft">
      {/* page location */}
      <div className="text-[textSoft] font-blod capitalize">{pathname.split("/").pop()}</div>

      <div className="grid grid-flow-col gap-x-2.5 items-center">
        {/* nav search */}
        <div className="bg-[#2e374a] grid items-center grid-flow-col gap-x-2.5 rounded-lg p-2.5">
          <MdSearch />
          <input type="text" placeholder="search..." className="bg-transparent border-0 focus:border-0 outline-0 focus:outline-0 text-white"/>
        </div>

        {/* Icons */}
        <div className="grid grid-flow-col gap-x-4">
          <MdOutlineChat className="text-5"/>
          <MdNotifications className="text-5"/>
          <MdPublic className="text-5"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
