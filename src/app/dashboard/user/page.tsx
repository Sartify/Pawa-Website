
'use client'
import Dashboard from './Dashboard';
import { SessionProvider } from 'next-auth/react';


const page =   () => {
  return (
    
    <SessionProvider>
      <Dashboard/>
    </SessionProvider>
       
  )
}

export default page