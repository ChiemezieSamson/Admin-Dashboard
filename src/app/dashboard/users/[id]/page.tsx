import avatar from "./../../../../../public/noavatar.png"
import { SubmitButton, UserProductImageComponnet } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import { fetchSingleUser } from "@/app/lib/actions/fetchSingleUser/fetchSingleUser"

const UserViewPage = async ({params}: {params: {id: string}}) => {
  const user: any | null = await fetchSingleUser(params); 
  
  return (
    <div className="grid grid-cols-4 gap-x-10 mt-5">
      <UserProductImageComponnet col={"col-span-1"} name={"John Doe"} avatar={avatar.src} user={JSON.parse(JSON.stringify(user))}/>

      <section className="col-span-3 bgSoft p-5 rounded-lg">
        <form className="">
          <label className="font-extralight" htmlFor="username">
            Username
            <input type="text" name="username" id="username" placeholder={JSON.parse(JSON.stringify(user.username))} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="userEmail">
            Email
            <input type="email" name="email" id="userEmail" placeholder={JSON.parse(JSON.stringify(user.email))} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="password">
            Password
            <input type="password" name="password" id="password" placeholder={JSON.parse(JSON.stringify(user.password))} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="phone">
            Phone
            <input type="tel" name="phone" id="phone" placeholder={"+82-010"} className="productForm"/>
          </label>

          <label className="font-extralight" htmlFor="address">
            Address
            <textarea name="address" id="address" rows={2} className="productForm resize-none" placeholder={"Seoul"}></textarea>
          </label>

          <label className="font-extralight" htmlFor="isAdmin">
            Is Admin?
            <select name="is_admin" id="isAdmin" className="productForm">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>

          <label className="font-extralight" htmlFor="isActive">
            Is Active?
            <select name="is_active" id="isActive" className="productForm">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>

          <div className="mt-5">
            <SubmitButton submitText={"Update"}/>
          </div>
        </form>
      </section>      
    </div>
  )
}

export default UserViewPage
