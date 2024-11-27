
function Ellipse({x='0',y='0',top='0',left='0',scale='100'}:
    {x?:string,y?:string,top?:string,left?:string,scale?:string}) {
  return (
    <div 
    className={` rounded-[50%] z-0 p-[1px] aspect-[${x}/${y}]
     relative scale-[100%] rotate-[14.21deg]
     bg-gradient-to-r from-[#484848] via-[#484848]/36 to-[#484848]`}>
        <div className=" w-full h-full rounded-[50%] bg-[#1E1E1E] z-0">

        </div>
    </div>
  )
}

export default Ellipse