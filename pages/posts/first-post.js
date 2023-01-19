import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost(params) {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>//Titulo de la pestaña
        </Head>
        <Script
          //cargando recursos de terceros
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload" //indica una carga perezosa
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1>First Post</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </Layout>
    </>
  );
}
