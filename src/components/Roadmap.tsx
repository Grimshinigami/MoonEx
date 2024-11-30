import RoadmapBackPic from '../assets/roadmapBackground.svg'
// import doubleTick from '../assets/doubleTick.svg'
import lightningPic from '../assets/lightningPic.svg'
// import RoadMapTrier from '../assets/RoadmapTrier.svg'
import PhaseOnePic from '../assets/PhaseOne.svg'
import PhaseTwoPic from '../assets/PhaseTwo.svg'
import PhaseThreePic from '../assets/PhaseThreePic.svg'
import BasicLinkIcon from '../assets/BasicLinkIcon.svg'

function Roadmap() {

  return (
    <div className=" w-full bg-vpw bg-no-repeat flex flex-col z-10 bg-[#071624]" 
    style={{backgroundImage: "url("+RoadmapBackPic+")",backgroundColor: "rgba(0,0,0,0.2)"}}>
      <div className=" text-2xl md:text-2xl lg:text-3xl lg:pl-40 flex w-full font-neue z-50 justify-end pr-[10%] md:pt-[8%] pt-[12%] md:pb-[4%] pb-[9%]">
        <p className=' text-white'>Project <span className=" text-[#F9D423]">Roadmap</span>?</p>
      </div>
      <div className=' flex flex-col w-full'>
        <div className=' w-full flex flex-col gap-8'>
          <div className=' w-full lg:text-2xl text-xl font-neue flex flex-row justify-end text-[#B2FFAC]'>
            <p className=' pr-[15%]'>Phase One</p>
          </div>
          {/* <div className=' flex flex-col md:flex-row border-2 border-white'>
            <div className=' flex flex-col md:w-[25%] w-full gap-2 border-2 border-white'>
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-col md:flex-row justify-center'>
                <div className=' h-full md:w-[55%] w-full flex md:justify-end justify-center border-2 border-white'>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' flex-grow h-full overflow-hidden max-md:py-8 border-2 border-white' id={`${window.width>768?"dottedLine2":""}`}>
                  {window.width<768 && <div className='w-full h-full rotate-90' id="dottedLine2">h</div>}
                </div>
              </div>
              {window.width>768 && 
              <div className='p-8'>

              </div>}
            </div>
            <div className=' flex flex-col w-[25%] gap-1'>
              <div className='p-8'>

              </div>
              <div className=' flex flex-row justify-center'>
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
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>

            </div>
            <div className=' flex flex-col w-[25%] gap-2'>
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-row justify-center'>
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
            <div className=' flex flex-col w-[25%] gap-1'>
              <div className='py-8'>

              </div>
              <div className=' flex flex-row  '>
                <div className=' h-full w-[55%] flex justify-end'>
                  <div className=' flex-grow h-full' id="dottedLine2">
                  </div>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' w-[30%] h-full' id="dottedLine3">
                </div>
                <div className=' h-full flex-grow flex items-end'>
                  <div className=' border-l-[1px] border-[#40454B] w-full h-[50%] '></div>
                </div>
              </div>

              <div className=' w-full flex flex-row scale-y-[118%]'>
                <div className=' w-[70%]  flex justify-end'>
                  <p className=' font-raleway text-[#838383] text-sm w-[60%] text-center'>
                    Point number one is completed and seven words
                  </p> 
                </div>
                <div className=' h-full flex-grow flex justify-center'>
                  <div className=' border-l-[1px] border-[#40454B] relative left-[1px]'>

                  </div>
                </div>
              </div>

                             
            </div>
          </div> */}
            <div className=' w-full'>
              <img src={PhaseOnePic} alt="" />
            </div>
        </div>
      </div>
      <div className=' flex flex-col w-full'>
        <div className=' w-full flex flex-col'>
          <div className=' w-full lg:text-2xl text-xl text-[#EDD955] font-neue flex flex-row justify-start items-center'>
            <p className=' flex flex-grow justify-start pl-[10%]'>Phase Two</p>
            <div className=' xl:w-[27.3%] md:w-[24.6%] w-[24%] max-md:h-[30%] flex justify-center'>
              <img src={lightningPic} alt="" />
            </div>
          </div>
          {/* <div className=' flex flex-row '>
            <div className=' flex flex-col w-[25%] gap-2'>
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-row  justify-center'>
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
            <div className=' flex flex-col w-[25%] gap-1'>
              <div className='p-8'>

              </div>
              <div className=' flex flex-row justify-center'>
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
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>

            </div>
            <div className=' flex flex-col w-[25%] gap-2'>
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-row justify-center'>
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
            <div className=' flex flex-col w-[25%] gap-1 border-2 border-white'>
              <div className='py-8 border-2 border-white'>

              </div>
              <div className=' flex flex-row border-2 border-indigo-400'>
                <div className=' h-full w-[55%] flex justify-end'>
                  <div className=' flex-grow h-full' id="dottedLine2">
                  </div>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' w-[30%] h-full' id="dottedLine3">
                </div>
                <div className=' h-full flex-grow flex items-end'>
                  <div className=' border-l-[1px] border-[#40454B] w-full h-[50%] '></div>
                </div>
              </div>

              <div className=' w-full flex flex-row scale-y-[118%]'>
                <div className=' w-[70%]  flex justify-end'>
                  <p className=' font-raleway text-[#838383] text-sm w-[60%] text-center'>
                    Point number one is completed and seven words
                  </p> 
                </div>
                <div className=' h-full flex-grow flex justify-center'>
                  <div className=' border-l-[1px] border-[#40454B] relative left-[1px]'>

                  </div>
                </div>
              </div>

                             
            </div>
          </div> */}
          <div className=''>
            <img src={PhaseTwoPic} alt="" />
          </div>
        </div>
      </div>
      <div className=' flex flex-col w-full'>
        <div className=' w-full flex flex-col'>
          <div className=' w-full text-2xl text-[#ED5555] font-neue flex flex-row justify-end items-center h-full p-4'>
            
            <div className=' md:h-[30%] md:w-[20%] w-[17%] flex justify-center'>
              <img src={BasicLinkIcon} alt="" />
            </div>
            <p className=' pr-[13%] lg:text-2xl text-xl flex-grow flex justify-end'>Phase Three</p>
          </div>
          {/* <div className=' flex flex-row '>
            <div className=' flex flex-col w-[25%] gap-2'>
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-row  justify-center'>
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
            <div className=' flex flex-col w-[25%] gap-1'>
              <div className='p-8'>

              </div>
              <div className=' flex flex-row justify-center'>
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
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>

            </div>
            <div className=' flex flex-col w-[25%] gap-2'>
              <p className=' font-raleway text-[#838383] text-sm w-[40%] text-center mx-auto'>Point number one is completed and seven words</p>
              <div className=' flex flex-row justify-center'>
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
            <div className=' flex flex-col w-[25%] gap-1 border-2 border-white'>
              <div className='py-8 border-2 border-white'>

              </div>
              <div className=' flex flex-row border-2 border-indigo-400'>
                <div className=' h-full w-[55%] flex justify-end'>
                  <div className=' flex-grow h-full' id="dottedLine2">
                  </div>
                  <img
                  src={doubleTick}

                  alt="" />
                </div>
                <div className=' w-[30%] h-full' id="dottedLine3">
                </div>
                <div className=' h-full flex-grow flex items-end'>
                  <div className=' border-l-[1px] border-[#40454B] w-full h-[50%] '></div>
                </div>
              </div>

              <div className=' w-full flex flex-row scale-y-[118%]'>
                <div className=' w-[70%]  flex justify-end'>
                  <p className=' font-raleway text-[#838383] text-sm w-[60%] text-center'>
                    Point number one is completed and seven words
                  </p> 
                </div>
                <div className=' h-full flex-grow flex justify-center'>
                  <div className=' border-l-[1px] border-[#40454B] relative left-[1px]'>

                  </div>
                </div>
              </div>

                             
            </div>
          </div> */}
          <div className='w-full'>
            <img src={PhaseThreePic} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Roadmap