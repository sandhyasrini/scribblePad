import Image from 'next/image';
import { Inter } from 'next/font/google';
import SideBar from './SideBar/SideBar';
import AllNotes from './AllNotes/AllNotes';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-14'>
      <div className='flex mb-4 w-[100%]'>
      <div className='w-1/4'>
        <SideBar />
        </div>
        <div className='w-3/4'>
        <AllNotes />
        </div>

      </div>
    </main>
  );
}
