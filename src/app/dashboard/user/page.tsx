
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Dashboard from './Dashboard';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


const page =  async () => {

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth'); // Redirect unauthenticated users
  }
  return (
    <>
        <Dashboard/>
    </>
  )
}

export default page