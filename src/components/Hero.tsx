import Navbar from "./Navbar"
import Button from "./Button"
import { useWindowSize } from "../Hooks/useWindow"
import { useEffect, useState } from "react";
import threelineicon from '../assets/ThreeBarIcon.svg'
import Nav_smaller from "./Nav_smaller";
import MoonexLogo from '../assets/MoonexLogo.svg'
import MoonexLogoText from '../assets/MoonexLogoText.svg'
import Ellipse from "./Ellipse";
import BackPic from '../assets/backgroundPic.svg'

function Hero() {

  const size = useWindowSize();

  const [show, setShow] = useState<boolean>(false)
  const [smaller, setsmaller] = useState<boolean>(size.width>768?false:true)

  const [width, setWidth] = useState<number> (size.width)
  const [height, setHeight] = useState<number> (size.width)


  useEffect(() => {
    if(size.width>768){
      if(smaller!=false){
        setsmaller(false)
        console.log("Set smaller false");
      }
    }
    else{
      if(smaller!=true){
        setsmaller(true)
        console.log("Set smaller true");
      }
    }

    console.log(size.width)

  }, [size.width])



  return (
    <div className=" w-full lg:pb-[80vh] bg-[#071624] bg-vpw bg-no-repeat" style={{backgroundImage: "url("+BackPic+")"}}>
    {/* <div className='tester'> */}
      <Nav_smaller flag={show} fn={setShow} flag2={smaller}/>
      {!smaller && <Navbar/>}
      {smaller && <div className=" w-full flex justify-end p-2 items-center">
        <div className="h-12 w-full flex flex-row justify-start items-center">
            <img 
            src={MoonexLogo} 
            className="h-40 w-40 relative left-1 top-2"
            alt="MoonexLogo" />
            {/* <img 
            src={MoonexLogoText} 
            className="h-20 w-20"
            alt="MoonexLogoText" /> */}
        </div>
        <div className=" h-full w-10 hover:bg-gray-300 delay-100 z-50 ">
            <button 
              onClick={()=>(setShow((show)=>!show))}
              className=" flex "
            >
              <img
              src={threelineicon}
              width={200}
              height={200}
              className=""
              alt="Three line icon"
              />
            </button>
            </div>
        </div>}
        <div className=" flex flex-col w-full h-full lg:pt-60 lg:pl-32 lgbt:pt-24 pt-16 pl-10 md:pt-42 md:pl-24 p-2 font-neue gap-4">
          <div className=" text-3xl md:text-5xl lg:text-6xl text-white flex w-[50%] ">
            <p>Trusted Multi-Chain <span className=" text-[#F9D423]">DEX</span> Platform</p>
          </div>
          <p className=" text-[#9E9E9E] md:text-base text-sm">Trade, earn and own crypto on the all-in-one multi-chain DEX</p>
          <div className="  flex flex-row gap-6 font-raleway font-extrabold">
            <Button text="Connect Wallet"/>
            <Button gradient={false} borderColor="E4B40D" text="Trade Crypto" textColor="E4B40D"/>
          </div>
        </div>
        {/* <img src={BackPic}
        className=" w-full h-full z-10 relative lg:-top-[80vh] md:-top-[62vh] lgbt:-top-[83vh] -top-[54vh] "
        alt="" /> */}
    </div>
  )
}

export default Hero