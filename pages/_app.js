import '../styles/globals.css'
import Main from '../components/main.js'
import { AnimatePresence } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, x: -500, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

function MyApp({ Component, pageProps }) {
  return (
    <div className={Component.name}>
      <Main>
        <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
          <Component {...pageProps} />
        </AnimatePresence>
      </Main>
    </div>
  )
}

export default MyApp
