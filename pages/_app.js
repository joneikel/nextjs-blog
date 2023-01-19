//Este archivo automaticamente se superpone en un nivel superior con el resto de las vistas nextjs
import "../styles/globals.css"; //Styles global

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
