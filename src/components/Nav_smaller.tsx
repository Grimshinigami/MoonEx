

function Nav_smaller({flag=false, fn, flag2}:{flag:boolean, fn:React.Dispatch<React.SetStateAction<boolean>>, flag2:boolean}) {    

    return (
      <div 
      id={flag==true?'nav':'nav2'}
      className={` w-[50vw] h-full text-white font-raleway font-extrabold fixed left-0 top-0 bg-[#1E1E1E] z-50 ${flag2==false?'transition-none invisible':''}`}
      >
          
          <div className="flex flex-col justify-start items-center gap-[4vw] z-80">

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