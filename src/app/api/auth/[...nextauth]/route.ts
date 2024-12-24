import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          // Send credentials to your NestJS backend
          const res = await fetch('http://localhost:4000/api/v1/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          if (!res.ok) throw new Error('Invalid credentials');

          const data = await res.json();

          // Return the token and any user data needed
          return {
            id: '1', // Replace with actual user ID if available
            email: credentials?.email,
            accessToken: data.access_token,
          };
        } catch (error) {
          console.error('Authorization Error:', error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    // Save the JWT token in the session
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    // Expose the token to the client session
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in page
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
