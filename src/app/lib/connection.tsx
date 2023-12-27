import mongoose from "mongoose";
import "dotenv/config"

interface ConnectionObject {
  isConnected?: boolean;
}

// Extend the NodeJS Process interface to include your custom environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv{
      MONGO_DB: string;
    }
  }
}

let connection: ConnectionObject = {};

export const connectDB = async (): Promise<{ message?: string }> => {
  try {
    if (connection.isConnected) return { message: "Already connected" };

    const db = await mongoose.connect(process.env.MONGO_DB);
    connection.isConnected = db.connections[0].readyState === 1;

    return { message: "Successfully connected to the database" };
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
};
