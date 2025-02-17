import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("users");

        let user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (
          !user ||
          !(await bcrypt.compare(credentials.password, user.password))
        ) {
          const hashed = await bcrypt.hash(credentials.password, 16);

          await db.collection("users").insertOne({
            email: credentials.email,
            password: hashed,
          });
          user = await db
            .collection("users")
            .findOne({ email: credentials.email });
        }

        return { id: user._id, email: user.email };
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
