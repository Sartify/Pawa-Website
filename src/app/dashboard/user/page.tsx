
'use client'
import Dashboard from './Dashboard';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { SessionProvider } from 'next-auth/react';


const page =   () => {
  return (
    
    <SessionProvider>
      <Dashboard/>
    </SessionProvider>
       
  )
}

export default page