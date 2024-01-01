import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "@/app/auth.config"
import { connectDB } from "@/app/lib/connection"
import User from "@/app/lib/mongoose/modles/userSchema"
const bcrypt = require('bcrypt');

const login = async ({ username, password }: Partial<Record<string, unknown>>) => {
  try {
    connectDB()

    const user = await User.findOne({username: username})

    if(!user) throw new Error("Wrong credentials")

    const isPasswordCorrect = bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) throw new Error("Wrong credentials")

    return user

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

export const {signIn, signOut, auth} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
 
        try {
         const user = await login(credentials)

         return user
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

      },
    }),
  ],
})