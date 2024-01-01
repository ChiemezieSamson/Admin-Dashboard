import { connectDB } from "../../connection";
import User from "../../mongoose/modles/userSchema";


export const fetchSingleUser = async ({id}: {id: string}) => {
  const checkforspace = id.match(/%20/gi)
  let newId
  
  if (!checkforspace) {
    newId = id
  } else {
    newId = decodeURIComponent(id.replace(/\+/g, ' '))
  }

  try {
    connectDB()
    const user = await User.findOne({username: newId})
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