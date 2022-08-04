import Layout from '../components/Layout/Layout';
import '../styles/globals.css'
import "swiper/css/bundle";
import "/styles/styles.css"

function MyApp({ Component, pageProps}, logo) {
  return (
    <Layout>
      <div>
        <Component {...pageProps} />
      </div>      
    </Layout>
  ); 
}

export default MyApp
