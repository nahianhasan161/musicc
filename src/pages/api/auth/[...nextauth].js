import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/db";
import Users from "@/models/Users";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    // google provider
    GoogleProvider({
      clientId:
        "75353046224-cnftcbe6k91nd44dhu0f5ppjq8u240ib.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectDB().catch((error) => {
          error: "Connection Failed...!";
        });

        // check user existance
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }

        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
    }),
    
  ],
  
  
});

// export default {
//     providers: [
//       Providers.Google({
//         clientId: "75353046224-cnftcbe6k91nd44dhu0f5ppjq8u240ib.apps.googleusercontent.com",
//         clientSecret: "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",
//       }),
//       // other providers if needed
//     ],
//     // other NextAuth configurations
//   };
