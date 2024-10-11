import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "process.env.GITHUB_ID",
      clientSecret: "process.env.GITHUB_SECRET",
    }),
    GoogleProvider({
      clientId: "process.env.GITHUB_ID",
      clientSecret: "process.env.GITHUB_SECRET",
    }),
    FacebookProvider({
      clientId: "process.env.GITHUB_ID",
      clientSecret: "process.env.GITHUB_SECRET",
    }),
  ],
});

export { handler as GET, handler as POST };
