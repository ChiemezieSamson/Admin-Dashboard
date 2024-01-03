import { SubmitButton } from "@/Components/Dashboard/SharedComponents/SharedComponents"
import { Authentication } from "../lib/actions/authentication/authentication"



const LoginPage = () => {
  return (
    <div className="w-full h-screen grid items-center justify-center text-center">
      <form action={Authentication} className="bgSoft p-8 rounded-lg max-w-[300px] grid items-center justify-center">
        <div className="text-2xl font-extrabold mb-5 mt-0">Login</div>
        <div>
          <input type="text" placeholder="username" name="username" className="productForm"/>
          <input type="password" placeholder="password" name="password" className="productForm"/>
          <SubmitButton submitText={"Login"}/>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
