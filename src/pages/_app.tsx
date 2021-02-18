import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React - Wiser Educação</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="React test for education wiser with, typescript, react, nextjs, hooks, redux, etc"
        />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
