import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const isCorrectCredentials = (credentials) =>
  credentials.password === process.env.NEXTAUTH_PASSWORD;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Password",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (isCorrectCredentials(credentials)) {
          const user = { id: 1, name: "Admin" };
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user);
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null);
        }
      },
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
