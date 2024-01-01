import { connectDB } from "../../connection";
import { Product } from "../../mongoose/modles/productSchema"

export const fetchSingleProduct = async ({id}:{id: string}) => {
  const checkforspace = id.match(/%20/gi)
  let newId
  
  if (!checkforspace) {
    newId = id
  } else {
    newId = decodeURIComponent(id.replace(/\+/g, ' '))
  }
  
 
  try {
    connectDB()
    const product = await Product.findOne({title: newId})
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