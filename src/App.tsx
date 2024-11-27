import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Faq from './components/Faq'
import Footer from './components/Footer'
import BackPic from './assets/backgroundPic.svg'

function App() {
 
  return (
    <div className='w-screen h-screen overflow-y-scroll bg-[#071624]'>
      <Hero/>
      <About/>
      <Roadmap/>
      <Faq/>
      <Footer/>
      {/* <img src={BackPic}
      // className=" w-full h-full z-10 relative lg:-top-[80vh] md:-top-[62vh] lgbt:-top-[83vh] -top-[54vh] "
      className=" w-full h-full z-10 absolute"
      alt="" /> */}
    </div>
  )
}

export default App
