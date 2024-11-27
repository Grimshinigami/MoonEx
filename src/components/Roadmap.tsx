import RoadmapBackPic from '../assets/roadmapBackground.svg'
import doubleTick from '../assets/doubleTick.svg'
import lightningPic from '../assets/lightningPic.svg'

function Roadmap() {
  return (
    <div className=" w-full bg-vpw bg-no-repeat flex flex-col z-10 bg-[#071624]" 
    style={{backgroundImage: "url("+RoadmapBackPic+")",backgroundColor: "rgba(0,0,0,0.2)"}}>
      <div className=" text-3xl md:text-2xl lg:text-3xl lg:pl-40 flex w-full font-neue z-50 justify-end pr-28 pt-32 pb-16">
        <p className=' text-white'>Project <span className=" text-[#F9D423]">Roadmap</span>?</p>
      </div>
      <div className=' flex flex-col w-full'>
        <div className=' w-full flex flex-col border-2 border-white gap-8'>
          <div className=' w-full text-2xl text-[#B2FFAC] font-neue flex flex-row justify-end'>
            <p className=' pr-52'>Phase One</p>
          </div>
          <div className=' flex flex-row border-2 border-white'>
            <div className=' flex flex-col w-[25%] border-2 border-green-600 gap-2'>
              <p className=' font-raleway text-[#838383] text-sm border-2 border-white w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-row border-2 border-indigo-600 justify-center'>
                <div className=' h-full w-[55%] flex justify-end'>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' flex-grow h-full' id="dottedLine2">
                </div>
              </div>
              <div className='p-8'>

              </div>
            </div>
            <div className=' flex flex-col w-[25%] border-2 border-green-600 gap-2'>
              <div className='p-8'>

              </div>
              <div className=' flex flex-row border-2 border-indigo-600 justify-center'>
                <div className=' h-full w-[55%] flex justify-end'>
                  <div className=' flex-grow h-full' id="dottedLine2">
                  </div>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' flex-grow h-full' id="dottedLine2">
                </div>
              </div>
              <p className=' font-raleway text-[#838383] text-sm border-2 border-white w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>

            </div>
            <div className=' flex flex-col w-[25%] border-2 border-green-600 gap-2'>
              <p className=' font-raleway text-[#838383] text-sm border-2 border-white w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-row border-2 border-indigo-600 justify-center'>
                <div className=' h-full w-[55%] flex justify-end'>
                  <div className=' flex-grow h-full' id="dottedLine2">
                  </div>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' flex-grow h-full' id="dottedLine2">
                </div>
              </div>
              <div className='p-8'>

              </div>
            </div>
            <div className=' flex flex-col w-[25%] border-2 border-green-600'>
              <div className='p-8'>

              </div>
              <div className=' flex flex-row border-2 border-indigo-600 '>
                <div className=' h-full w-[55%] flex justify-end border-2 border-white'>
                  <div className=' flex-grow h-full' id="dottedLine2">
                  </div>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' w-[30%] h-full' id="dottedLine3">
                </div>
                <div className=' h-full flex-grow flex items-end'>
                  <div className=' border-l-[1px] border-[#40454B] w-full h-[50%]'></div>
                </div>
              </div>
              <p className=' font-raleway text-[#838383] text-sm border-2 border-white w-[40%] text-center mx-auto'>
                Point number one is completed and seven words
              </p>                
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Roadmap