import { connectDB } from "../../connection";
import { User } from "../modles/userSchema";

export const fetchUser = async ({user}:{user: string}) => {
  const regex = new RegExp(user, "i")
  try {
    connectDB()
    const users = await User.find({username: {$regex: regex}});

    return users

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