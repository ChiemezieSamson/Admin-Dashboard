import { AddNewButton, Search } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import Pagination from "@/Components/Dashboard/pagination/Pagination"
import Users from "@/Components/Dashboard/users/Users"
import { fetchUser } from "@/app/lib/mongoose/routes/userRoute"


const UsersPage = async () => {
  const users = await fetchUser()
  console.log(users);
  
  return (
    <div className="bgSoft p-5 rounded-lg mt-5">
      <div className="grid grid-flow-col items-center justify-between">
        <Search placeholder={"Search for a user..."}/>
        <AddNewButton url="users/add-new-user" text="Add New"/>
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
