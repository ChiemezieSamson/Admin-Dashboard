import { connectDB } from '../../connection';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import User from '../../mongoose/modles/userSchema';
const bcrypt = require('bcrypt');


const updateUsers = async (formData: FormData) => {
  "use server"
  const {_id, username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData)

  try {
    connectDB()
    let newPassword

    if (password !== "" || password !== undefined) {
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      newPassword = hashedPassword
    } else {
      newPassword = ""
    }

    const updatefiliter = {username, email, password: newPassword, phone, address, isAdmin, isActive}

    Object.keys(updatefiliter).forEach((key) => {
      if (updatefiliter[key as keyof typeof updatefiliter] === "" || updatefiliter[key as keyof typeof updatefiliter] === undefined) {
        delete updatefiliter[key as keyof typeof updatefiliter];
      }
    } )

    await User.findByIdAndUpdate(_id, updatefiliter)

  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: `Something went wrong: ${error.message}`,
      };
    }
    return {
      message: "Unknown error occurred while connecting to the database",
    };
  }

  revalidatePath("/dashboard/users")
  redirect("/dashboard/users")
}

export default updateUsers
