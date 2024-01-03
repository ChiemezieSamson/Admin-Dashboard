import NextAuth from "next-auth";
import { authConfig } from "@/app/authConfig";
import { connectDB } from "@/app/lib/connection";
import User from "@/app/lib/mongoose/modles/userSchema";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const login = async (credentials) => {
	try {
		connectDB();

		const user = await User.findOne({ username: credentials.username });

		if (!user) throw new Error("Wrong credentials");

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user?.password
		);

		if (!isPasswordCorrect) throw new Error("Wrong credentials");

		return user;
	} catch (error) {
		if (error instanceof Error) {
			return {
				message: `Something went wrong: ${error.message}`,
			};
		}
		return {
			message: "Unknown error occurred while connecting to the database",
		};
	}
};

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);

					return user;
				} catch (error) {
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
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.username = user.username;
				token.image = user.image;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.username = token.username;
				session.image = token.image;
			}
			return session;
		},
	},
});
