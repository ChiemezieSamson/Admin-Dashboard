import { usersItem } from "@/Components/Data/Data"
import { fetchUser } from "@/app/lib/mongoose/routes/userRoute"
import Image from "next/image"
import Link from "next/link"


const Users = async ({searchParams}:{searchParams: any}) => {
  const user = searchParams?.username 
  const users = await fetchUser({user})

  return (
    <table className="w-full">
      <caption className="mb-5 font-extralight textSoft">Latest Transactions</caption>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        {Array.isArray(users) && users.map(user => {

          return (
          <tr key={user._id}>
            <td>
              <figure className="grid grid-cols-3 max-w-[180px] items-center">
                <Image src={user.image || usersItem[0].avatar} width={40} height={40} alt="" className="w-10 h-10 rounded-full col-span-1"/>
                <figcaption className="col-span-2">{user.username}</figcaption>
              </figure>
            </td>
            <td><span>{user.email}</span></td>
            <td><span>{user.createdAt?.toString().slice(0, 16)}</span></td>
            <td><span>{user.isAdmin ? "Admin" : "Client"}</span></td>
            <td><span>{user.isActive ? "active" : "passive"}</span></td>
            <td>
              <div className="grid grid-flow-col gap-x-2.5 max-w-[90px]">
                <Link href={`/dashboard/users/${user.username}`}>
                  <button className="button px-2.5 py-1.5 bg-teal-500">View</button>
                </Link>
                
                <button className="button px-2.5 py-1.5 bg-red-500">Delete</button>                
              </div>
            </td>
          </tr>
          )
        })}          
      </tbody>
    </table>      
  )
}

export default Users
