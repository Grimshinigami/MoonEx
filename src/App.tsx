import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Faq from './components/Faq'
import Footer from './components/Footer'
// import BackPic from './assets/backgroundPic.svg'

function App() {
 
  return (
    <div className='w-screen h-screen overflow-y-scroll bg-[#071624]'>
      <Hero/>
      <About/>
      <Roadmap/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
