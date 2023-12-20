import Navbar from "@/Components/Dashboard/navbar/Navbar"
import '../../Components/globals.css'
import Sidebar from "@/Components/Dashboard/sidebar/Sidebar"
import Footer from "@/Components/Dashboard/footer/Footer"

interface children {
  children: React.ReactNode
}
const layout = ({children}: children) => {
  return (
    <div className="grid grid-cols-5">
      <aside className="col-span-1 bgSoft p-5">
        <Sidebar />
      </aside>

      <div className="col-span-4 p-5">
        <div>
          <Navbar/>
        </div>

        <div>
          {children}
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default layout
