import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSession, getSession, signOut } from 'next-auth/react'; // Import getSession, signOut from next-auth/react

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? <User session={session} handleSignOut={handleSignOut} /> : <Guest />}
    </div>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={'/login'}>
          <span className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">Sign In</span>
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }) {
  console.log(session.user)
  return (
    <main className="container mx-auto text-center py-20 text-white space-y-4 min-w-fit">
      <h3 className="text-4xl font-bold">Authorized User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
        {/* <h5>{...[session.user]}</h5> */}
      </div>

      <div className="flex justify-center hover:opacity-80">
        <button onClick={handleSignOut} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
          Sign Out
        </button>
      </div>

      <div className="flex justify-center hover:opacity-80">
        <Link href={'/profile'}>
          <span className="mt-5 px-10 py-2 rounded-sm bg-indigo-500 text-gray-50">Profile Page</span>
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
