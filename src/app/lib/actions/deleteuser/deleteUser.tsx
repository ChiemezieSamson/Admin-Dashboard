import { revalidatePath } from 'next/cache';
import { connectDB } from '../../connection';
import User from '../../mongoose/modles/userSchema';


const deleteUser = async (formData: FormData) => {
  "use server"
  const {_id} = Object.fromEntries(formData)

  try {
    connectDB()

    const UsersId = await User.findById(_id)

    await UsersId.deleteOne()

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

  revalidatePath("/dashboard/Userss")
}

export default deleteUser
