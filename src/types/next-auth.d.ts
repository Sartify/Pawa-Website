import NextAuth, { DefaultSession, DefaultUser, JWT } from 'next-auth';

declare module 'next-auth' {
  // Extend the User type to include accessToken
  interface User extends DefaultUser {
    accessToken: string;
  }

  // Extend the Session type to include accessToken
  interface Session extends DefaultSession {
    accessToken: string;
    user: {
      id: string;
      email: string;
      name?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  // Extend the JWT type to include accessToken
  interface JWT {
    accessToken: string;
    id?: string;
  }
}
