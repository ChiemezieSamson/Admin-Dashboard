import User from '../../mongoose/modles/userSchema';
import { connectDB } from '../../connection';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const bcrypt = require('bcrypt');


const addUsers = async (formData: FormData) => {
  "use server"
  const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData)

  try {
    connectDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username, email, password: hashedPassword, phone, address, isAdmin, isActive
    })

    await newUser.save()

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

export default addUsers
