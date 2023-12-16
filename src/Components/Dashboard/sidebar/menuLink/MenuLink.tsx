import Link from "next/link"
import { IconType } from "react-icons";


const MenuLink = ({item}:{item: {title: string, path: string, icon: IconType}}) => {
 
  return (
    <Link href={item.path}>
      <span>
        <item.icon />
      </span>
      <span>
        {item.title}
      </span>
    </Link>
  )
}

export default MenuLink
