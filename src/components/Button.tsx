import { useEffect, useState } from "react"

function Button({gradient=true,borderColor='none',textColor='black',text='Button'}:
    {gradient?:boolean,borderColor?:string,textColor?:string,text?:string}) {

      const [classString, setClassString] = useState<string>('rounded-2xl  px-3 py-1 text-[#E4B40D] flex flex-row font-raleway font-extrabold')

      useEffect(() => {
        if(gradient===true){
          setClassString(str=> str+' bg-gradient-to-r from-[#E4B40D] to-[#FFE68F]')
        }

        if(borderColor!=='none'){
          setClassString(str=> str+` border-2 border-[#E4B40D]`)
        }

        if(textColor==='black'){
          setClassString(str=> str+' text-black')
        }
        else {
          setClassString(str=> str+` text-[#${textColor}]`)
        }

      }, [])
      

  return (
    // <button className={`  rounded-2xl ${gradient==true?"bg-gradient-to-r from-[#E4B40D] to-[#FFE68F]":""}
    //  ${borderColor!=='none'?`border-2 border-[#${borderColor}]`:''} px-3 py-1 text-[#E4B40D] flex flex-row`}>
    <button className={classString}>
        <p>{text}</p>
    </button>
  )
}

export default Button