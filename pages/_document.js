/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
<<<<<<< HEAD
        <meta name="viewport" content="width=device-width, initial-scale=1" />
=======
        <meta name="viewport" content="width=device-width, initial-scale=1, scale-to-fit=no" />
>>>>>>> 30898c924a39b8521be8222cad79134a455a3f6e
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
