// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi">
      {" "}
      {/* Change 'en' to your desired language code */}
      <Head>{/* Add any additional <head> content here */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
