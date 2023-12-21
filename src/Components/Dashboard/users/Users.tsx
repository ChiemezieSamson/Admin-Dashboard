import { usersItem } from "@/Components/Data/Data"
import Image from "next/image"
import Link from "next/link"



const Users = () => {

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
        {usersItem.map(user => {

          return (
          <tr key={user.id}>
            <td>
              <figure className="grid grid-cols-3 max-w-[180px] items-center">
                <Image src={user.avatar} alt="" className="w-10 h-10 rounded-full col-span-1"/>
                <figcaption className="col-span-2">{user.name}</figcaption>
              </figure>
            </td>
            <td><span>{user.email}</span></td>
            <td><span>{user.date}</span></td>
            <td><span>{user.role}</span></td>
            <td><span>{user.status}</span></td>
            <td>
              <div className="grid grid-flow-col gap-x-2.5 max-w-[90px]">
                <Link href={'/'}>
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
