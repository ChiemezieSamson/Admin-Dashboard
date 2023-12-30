import { connectDB } from "../../connection";
import  User from "../modles/userSchema";

export const fetchUser = async ({user, page}:{user: string, page: string}) => {
  const regex = new RegExp(user, "i")
  const _items_per_page = 2
  try {
    connectDB()
    const totalUsers = await User.find({username: {$regex: regex}}).countDocuments()
    const users = await User.find({username: {$regex: regex}}).limit(_items_per_page).skip(_items_per_page * (parseInt(page) - 1));

    return {users, totalUsers}

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