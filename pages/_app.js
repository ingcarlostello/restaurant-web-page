import Layout from '../components/Layout/Layout';
import '../styles/globals.css'
import "swiper/css/bundle";
import "/styles/styles.css"

function MyApp({ Component, pageProps }) {
 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ); 
}

export default MyApp
