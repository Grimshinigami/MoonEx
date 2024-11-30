import { useEffect, useState } from "react"


function Nav_smaller({flag=false, fn, flag2}:{flag:boolean, fn:React.Dispatch<React.SetStateAction<boolean>>, flag2:boolean}) {    

    const [currentId, setCurrentId] = useState<string>('')

    useEffect(() => {
        
        if(flag){
            setCurrentId('nav')
        } else {
            setCurrentId('nav2')
        }


    }, [flag])
    

    return (
      <div 
    //   id={flag==true?'nav':'nav2'}
      id={currentId}
      className={` w-[50vw] h-full text-white ${currentId==='nav'?'z-[70]':''} font-raleway font-extrabold fixed left-0 top-0 bg-[#1E1E1E] ${flag2==false?'transition-none invisible':''}`}
      >
          
          <div className="flex flex-col justify-start items-center gap-[4vw]">

              <a 
              href="#Home"
              onClick={()=>fn(false)}
              >
                  Home
              </a>
              <a 
              href="#About"
              onClick={()=>fn(false)}
              >
                  About Us
              </a>
              <a 
              href="#Skills"
              onClick={()=>fn(false)}
              >
                  Roadmap
              </a>
              <a 
              href="#Projects"
              onClick={()=>fn(false)}
              >
                  FAQs
              </a>
              <a 
              href="#Contact"
              onClick={()=>fn(false)}
              >
                  Contact Us
              </a>
          </div>
      </div>
    )
  }
  
  export default Nav_smaller