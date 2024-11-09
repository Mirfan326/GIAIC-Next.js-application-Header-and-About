import Head from 'next/head';

import Header from '../../components/header';
import About from '../../components/about';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Components</title>
      </Head>

      {/* Importing Header Component */}
      <Header />

      <main style={{ padding: '20px' }}>
        <h1>Home Page</h1>
        <p>This is the main content of the home page.</p>

        {/* Importing About Component */}
        <About />
      </main>
    </div>
  );
}
