import '../styles/globals.css'
import Layout from '../components/layout.js'
import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  return (
    <Layout className={pageProps.page}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
