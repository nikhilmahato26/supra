import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import ProductRange from './components/ProductRange'
import ElectrodeTypes from './components/ElectrodeTypes'
import Specifications from './components/Specifications'
import Applications from './components/Applications'
import Quality from './components/Quality'
import Certifications from './components/Certifications'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Wordmark from './components/Wordmark'
import Footer from './components/Footer'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-cream"
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <ProductRange />
        <ElectrodeTypes />
        <Specifications />
        <Applications />
        <Quality />
        <Certifications />
        {/* <Gallery /> */}
        <Contact />
        <Wordmark />
      </main>
      <Footer />
    </motion.div>
  )
}
