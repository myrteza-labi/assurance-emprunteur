import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/globals.css'
import '../styles/Home.css'
import '../styles/contact.css'
import '../styles/compagnie-assurance.css'
import '../styles/MainTitleH1.css'
import '../styles/h2Model1.css'
import '../styles/SimpleText.css'
import '../styles/ButtonModel1.css'
import '../styles/DropDownFaq.css'
import '../styles/Footer.css'





function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp; 
