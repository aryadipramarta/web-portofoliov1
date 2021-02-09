import '../styles/app.scss'
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }