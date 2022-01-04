import { Layout } from "components/Layout";
import "semantic-ui-css/semantic.min.css";
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
     
  );
}

