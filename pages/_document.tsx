import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=IBM+Plex+Sans:wght@400;500;700&family=Jost:wght@400;500;700&family=Sacramento&family=WindSong:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/images/tee.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
