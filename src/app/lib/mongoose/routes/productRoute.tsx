import { connectDB } from "../../connection";
import { Product } from "../modles/productSchema";


export const fetchProducts = async ({product, page}:{product: string, page: string}) => {
  const regex = new RegExp(product, "i")
  const _items_per_page = 2

  try {
    connectDB()
    const totalProducts = await Product.find({title: {$regex: regex}}).countDocuments()
    const products = await Product.find({title: {$regex: regex}}).limit(_items_per_page).skip(_items_per_page * (parseInt(page) - 1));

    return {products , totalProducts}

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
}