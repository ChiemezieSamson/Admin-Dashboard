import { connectDB } from '../../connection';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Product } from '../../mongoose/modles/productSchema';


const updateProduct = async (formData: FormData) => {
  "use server"
  const {_id, title, description, price, stock, color, size} = Object.fromEntries(formData)

  try {
    connectDB()
    const updatefiliter = {title, description, price, stock, color, size}

    Object.keys(updatefiliter).forEach((key) => {
      if (updatefiliter[key as keyof typeof updatefiliter] === "" || updatefiliter[key as keyof typeof updatefiliter] === undefined) {
        delete updatefiliter[key as keyof typeof updatefiliter];
      }
    } )

    await Product.findByIdAndUpdate(_id, updatefiliter)

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
  redirect("/dashboard/products")
}

export default updateProduct
