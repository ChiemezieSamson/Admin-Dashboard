import { menuItems } from "@/Components/Data/Data"
import MenuLink from "./menuLink/MenuLink"


const Sidebar = () => {
  return (
    <div className="">
      <ul>
        {
          menuItems.map(item => {
            return (
              <li key={item.title}>
                {item.title}

                  <div>
                    {item.list.map(links => {                     
                      return <MenuLink key={links.title} item={links} />
                    })}
                  </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar
