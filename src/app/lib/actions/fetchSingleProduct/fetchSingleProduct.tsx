import { connectDB } from "../../connection";
import { Product } from "../../mongoose/modles/productSchema"

export const fetchSingleProduct = async ({_id}:{_id: string}) => {
  try {
    connectDB()
    const product = await Product.findById(_id)
    return product

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