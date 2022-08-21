import '../styles/globals.scss'
import { MatrixContext } from '../context/MatrixContext'

function MyApp({ Component, pageProps }) {
  return <MatrixContext>
    <Component {...pageProps} />
    </MatrixContext> 
}

export default MyApp
