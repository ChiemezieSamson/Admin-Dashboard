import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { connectDB } from '../../connection';
import { Product } from '../../mongoose/modles/productSchema';


const addProduct = async (formData: FormData) => {
  "use server"
  const {title, description, price, stock, color, size} = Object.fromEntries(formData)

  try {
    connectDB()

    const newProduct = new Product({ title, description, price, stock, color, size })

    await newProduct.save()

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

export default addProduct
