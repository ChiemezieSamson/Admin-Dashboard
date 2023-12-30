import { connectDB } from "../../connection";
import User from "../../mongoose/modles/userSchema";


export const fetchSingleUser = async ({id}: {id: string}) => {
  try {
    connectDB()
    const user = await User.findOne({username: id})
    return user

  }catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: `Something went wrong: ${error.message}`,
      };
    }
    return {
      message: "Unknown error occurred while connecting to the database",
    };
  }
}