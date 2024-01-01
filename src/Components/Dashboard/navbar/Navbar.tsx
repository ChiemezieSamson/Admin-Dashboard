"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md"
import { SearchInput } from "../SharedComponents/SharedComponents"



const Navbar = () => {
  const pathname = usePathname()
  const getPath = pathname.split("/").pop()
  const checkforspace = getPath && getPath.match(/%20/gi)
  let PageTag
  
  if (!checkforspace) {
    PageTag = getPath
  } else {
    PageTag = decodeURIComponent(getPath.replace(/\+/g, ' '))
  }
 
  return (
    <div className="grid grid-flow-col justify-between items-center rounded-lg p-2.5 bgSoft">
      {/* page location */}
      <div className="text-[textSoft] font-blod capitalize">{PageTag}</div>

      <div className="grid grid-flow-col gap-x-2.5 items-center">
        {/* nav search */}
        <SearchInput placeholder={"search..."}/>

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
