"use client"
import { signIn } from "@/app/auth";



export const Authentication = async (formData: FormData) => {
  const {username, password} = Object.fromEntries(formData)

  try {
    // await signIn("credentials", {username, password})
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
