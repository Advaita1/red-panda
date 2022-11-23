import Head from 'next/head';
import { Landing } from '@components/landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Red Panda</title>
        <meta name="description" content="Generated by create next app" />
        <link type="image/png" sizes="96x96" rel="icon" href="/icons8-red-panda-96.png" />
      </Head>
      <Landing />
    </>
  );
}