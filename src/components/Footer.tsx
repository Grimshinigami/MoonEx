import MoonexFooter from '../assets/moonexFooter.svg'
import SenderIcon from '../assets/SenderIcon.svg'
import RedditIcon from '../assets/RedditIcon.svg'
import TwitterIcon from '../assets/twitterIcon.svg'

function Footer() {
  return (
    <div className=' w-full md:h-[25%] flex text-white max-md:p-10'>
      <div className=' w-full h-full flex md:flex-row flex-col items-center max-md: gap-6'>
        <div className=' md:w-[15%] max-md:justify-center md:h-[80%] flex justify-end max-md:order-last'>
          <img src={MoonexFooter} alt="" />
        </div>
        <div className=' font-raleway font-bold text-white text-md flex-1 flex md:flex-row flex-col md:gap-20 gap-10 justify-center'>
          <button>About Us</button>
          <button>Roadmap</button>
          <button>FAQs</button>
          <button>Contact Us</button>
        </div>
        <div className=' md:w-[20%] w-full flex flex-col font-raleway text-xl font-extrabold p-4 gap-4 justify-center items-center'>
          <p>Contact <span className=' text-[#F9D423]'>Us</span></p>
          <div className=' flex flex-row gap-4'>
            <div>
              <img src={SenderIcon} alt="" />
            </div>
            <div>
              <img src={RedditIcon} alt="" />
            </div>
            <div>
              <img src={TwitterIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer