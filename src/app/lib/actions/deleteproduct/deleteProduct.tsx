import { revalidatePath } from 'next/cache';
import { connectDB } from '../../connection';
import { Product } from '../../mongoose/modles/productSchema';


const deleteProduct = async (formData: FormData) => {
  "use server"
  const {_id} = Object.fromEntries(formData)

  try {
    connectDB()

    const ProductId = await Product.findById(_id)

    await ProductId.deleteOne()

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

  revalidatePath("/dashboard/products")
}

export default deleteProduct
