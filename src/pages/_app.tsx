import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <meta
          name="description"
          content="react test for education wiser with, typescript, react, nextjs, hooks, redux, etc"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
