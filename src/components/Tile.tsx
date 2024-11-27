

function Tile({pic,title,desc}:{pic:string,title:string,desc:string}) {
  return (
    <div className=' flex flex-col p-6 gap-10 bg-white/2 border-2 border-white/5 lg:w-[20%] md:w-[50%] w-full rounded-md'>
        <div className=' flex h-14 p-0'>
            <img 
            src={pic} 
            className=' relative -left-2'
            alt="" />
        </div>
        <div className=' flex flex-col w-full gap-2'>
            <p className=' font-raleway font-semibold text-base text-[#ECF1F0]'>{title}</p>
            <p className=' text-[#B6B6B6] text-sm w-full font-roboto'>{desc}</p>
        </div>
    </div>
  )
}

export default Tile