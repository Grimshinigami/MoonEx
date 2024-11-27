import aboutBackPic from '../assets/aboutBackgroundPic.svg'
import tickMark from '../assets/tickMarkIcon.svg'
import crossMark from '../assets/crossIcon.svg'
import moonexTable from '../assets/moonexTable.svg'
import uniswapTable from '../assets/uniswapTable.svg'
import dollarIcon from '../assets/dollarIcon.svg'
import tickShield from '../assets/tickShield.svg'
import phoneOff from '../assets/phoneOff.svg'
import optionsPic from '../assets/options.svg'
import Tile from './Tile'

function About() {
  return (
    <div className=" w-full bg-vpw bg-no-repeat flex flex-col z-10 gap-16 bg-[#071624]" 
    style={{backgroundImage: "url("+aboutBackPic+")",backgroundColor: "rgba(0,0,0,0.2)"}}>
      <div className=" text-3xl md:text-5xl lg:text-4xl lg:pl-40 flex w-[50%] font-neue z-50">
        <p className=' text-white'>Why <span className=" text-[#F9D423]">MoonEX</span>?</p>
      </div>
      <div className=' text-[#F0F0F0]/70 flex flex-wrap justify-center'>
        <table id="customers" className=' w-[90%] bg-white/5 rounded-md'>
          <tr>
            <th className=' border-r-[1px] border-[#D9D9D9]/10 text-2xl'>Comparisons</th>
            <th className=' border-r-[1px] border-[#D9D9D9]/10 flex justify-center'>
              <img 
              src={moonexTable} 
              className=' h-1/5 w-1/2'
              alt="" />
            </th>
            <th className=''>
              <img 
              src={uniswapTable}
              className=' mx-auto h-1/5 w-1/2'
              alt="" />
            </th>
          </tr>
          <tr>
            <td>Point no one</td>
            <td>
              <img 
              src={tickMark} 
              className=' h-[7%] w-[7%] mx-auto'
              alt="" />
            </td>
            <td>
              <img 
              src={crossMark} 
              className=' h-[15%] w-[15%] mx-auto'
              alt="" />
            </td>
          </tr>
          <tr>
            <td>Point no two this</td>
            <td>
            <img 
              src={tickMark} 
              className=' h-[7%] w-[7%] mx-auto'
              alt="" />
            </td>
            <td>
              <img 
              src={crossMark} 
              className=' h-[15%] w-[15%] mx-auto'
              alt="" />
            </td>
          </tr>
          <tr>
            <td>Point no three this</td>
            <td>
            <img 
              src={tickMark} 
              className=' h-[7%] w-[7%] mx-auto'
              alt="" />
            </td>
            <td>
              <img 
              src={crossMark} 
              className=' h-[15%] w-[15%] mx-auto'
              alt="" />
            </td>
          </tr>
          <tr>
            <td>Point no four this</td>
            <td>
            <img 
              src={tickMark} 
              className=' h-[7%] w-[7%] mx-auto'
              alt="" />
            </td>
            <td>
              <img 
              src={crossMark} 
              className=' h-[15%] w-[15%] mx-auto'
              alt="" />
            </td>
          </tr>
          <tr>
            <td>Point no five this</td>
            <td>
            <img 
              src={tickMark} 
              className=' h-[7%] w-[7%] mx-auto'
              alt="" />
            </td>
            <td>
              <img 
              src={crossMark} 
              className=' h-[15%] w-[15%] mx-auto'
              alt="" />
            </td>
          </tr>
        </table>
      </div>
      <div className=' w-full flex flex-col'>
        <div className=" text-3xl md:text-5xl lg:text-4xl flex w-full font-neue z-50 justify-center">
          <p className=' text-white'>Our <span className=" text-[#F9D423]">Features</span></p>
        </div>
        <div className=' w-full flex flex-wrap md:flex-row p-12 gap-12 justify-center'>
          <Tile pic={dollarIcon} title='Cheapest TXs' desc='Exchange popular digital currencies at the cheapest possible transaction price'/>
          <Tile pic={tickShield} title='CerTIK' desc='We are Audited by Certik. Certik is the leading secuirty-focused ranking platform to'/>
          <Tile pic={phoneOff} title='No Contract Sells' desc='No contract sells to fund the marketing wallets'/>
          <Tile pic={optionsPic} title='CrossDex Support' desc='Exchange popular digital currencies at the cheapest possible transaction price'/>
        </div>
      </div>
    </div>
  )
}

export default About