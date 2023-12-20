import { Search } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import Pagination from "@/Components/Dashboard/pagination/Pagination"
import Users from "@/Components/Dashboard/users/Users"
import Link from "next/link"

const UsersPage = () => {
  return (
    <div className="bgSoft p-5 rounded-lg mt-5">
      <div className="grid grid-flow-col items-center justify-between">
        <Search placeholder={"Search for a user..."}/>
        <Link href={"/dashboard/users/add"}>
          <button className="p-2.5 max-w-[100px] text-white bg-[#5d57c9] button">Add New</button>
        </Link>
      </div>

      <div>
        <Users />
      </div>

      <div className="mt-10">
        <Pagination />
      </div>
    </div>
  )
}

export default UsersPage
