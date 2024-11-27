import Button from "./Button"
import MoonexLogo from '../assets/MoonexLogo.svg'
import MoonexLogoText from '../assets/MoonexLogoText.svg'

function Navbar() {

  return (
    <div className=" flex flex-row gap-2">
        <div className=" flex flex-row justify-end items-center z-50">
            <img 
            src={MoonexLogo} 
            className="h-[85%] relative left-1 top-2"
            alt="MoonexLogo" />
            {/* <img 
            src={MoonexLogoText} 
            className="h-[30%]"
            alt="MoonexLogoText" /> */}
        </div>
        <div className=" flex flex-row xl:gap-36 lg:gap-20 sm:gap-8 flex-1 justify-center text-white z-50 font-raleway font-extrabold">
            <button>Home</button>
            <button>About Us</button>
            <button>Roadmap</button>
            <button>FAQs</button>
            <button>Contact Us</button>
        </div>
        <div className=" flex flex-col justify-center items-center w-52 p-2">
            <Button text="Connect Wallet" />
        </div>
    </div>
  )
}

export default Navbar