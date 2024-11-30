import FaqBackgroundPic from '../assets/faqBackgroundPic.svg'
import ArrowDown from '../assets/arrowDown.svg'
import { useState } from 'react'

function Faq() {

  const [disp2, setDisp2] = useState<boolean>(false)
  

  return (
    <div className=" w-full bg-no-repeat bg-cover flex flex-col z-10 bg-[#071624] " 
    style={{backgroundImage: "url("+FaqBackgroundPic+")",backgroundColor: "rgba(0,0,0,0.2)"}}>
      <div className=' w-full h-full md:p-28 lg:p-52 p-10 max-md:pt-20'>
        <div className=' w-full h-full bg-[#F7F9FF]/10 rounded-md'>
          <div className=' w-full p-10 font-neue text-3xl flex justify-center text-[#E4B40D]'>
            FAQs
          </div>
          <div className=' w-full p-5 text-white font-raleway flex flex-row items-center border-t-2 border-b-2 border-[#BBBBBB]/10'>
            <div className=' h-full flex-grow'>
              <p>How do I get referral Code?</p>  
            </div>
            <div className=' max-md:min-w-[20%] max-md:flex max-md:justify-center'>
              <button>
                <img src={ArrowDown} alt="" />
              </button>
            </div>
          </div>
          <div className=' w-full p-5 text-white font-raleway flex flex-col items-center border-b-2 border-[#BBBBBB]/10'>
            <div className=' w-full flex flex-row items-center'>
              <div className=' h-full flex-grow'>
                <p>Do I get rewarded in tokens or ETH when I refer buyers?</p>
              </div>
              <div className=' max-md:min-w-[20%] max-md:flex max-md:justify-center '>
                <button onClick={()=>setDisp2(disp2 => !disp2)}>
                {/* <button onClick={()=>console.log("button clicked")}> */}
                  <img src={ArrowDown} className={`${disp2?'rotate-180':''}`} alt="" />
                </button>
              </div>
            </div>
            {disp2 && 
            <div className=' w-full text-sm font-raleway text-[#BAB8B8] py-5'>
              <p>You receive your rewards in ETH instantly once someone you refer makes a transaction!</p>
            </div> }
          </div>
          <div className=' w-full p-5 text-white font-raleway flex flex-row items-center border-b-2 border-[#BBBBBB]/10'>
            <div className=' h-full flex-grow'>
              <p>How do I get referral Code?</p>  
            </div>
            <div className=' max-md:min-w-[20%] max-md:flex max-md:justify-center'>
              <button>
                <img src={ArrowDown} alt="" />
              </button>
            </div>
          </div>
          <div className='py-5'></div>
        </div>
      </div>
    </div>
  )
}

export default Faq