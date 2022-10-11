import '../styles/globals.css'
import Layout from '../components/layout.js'
import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  return (
    <div className={Component.name}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
