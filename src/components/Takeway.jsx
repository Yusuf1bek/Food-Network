import React from 'react'
import appStore from "../assets/images/store-icon.svg"
import googlePlay from "../assets/images/play-icon.svg"
import takeWayImg from "../assets/images/takeway-img.png"

const Takeway = () => {
  return (
    <section className=' flex items-center gap-[128px] w-[965px] py-[20px] m-auto'>
      <div className='w-[555px]'>
        <strong className=' uppercase text-[#DC780B] font-[400] text-[18px] leading-[18px] mb-[7px]'>Take away</strong>
        <h2 className=' font-[700] text-[31px] leading-[40px] mb-[25px]'>Food Stalls with Persons but  to  Product marketing plane. </h2>
        <p className='text-[#150C01]  font-[400] text-[16px] leading-[24px] mb-[40px]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>
        <div className='flex gap-[30px]'>
          <button className='flex items-center gap-[8px] text-center w-[136px] py-[10px] bg-[#150C01] text-[#FFFFFF] font-[500] text-[16px] leading-[18px] rounded-[8px] border-none'>
            <img className='ml-[8px]' src={appStore} alt="App Store" width={26} height={26}/>
            App Store
          </button>
          <button className='flex items-center gap-[8px] text-center w-[136px] py-[10px] text-[#150C01] bg-[#ffffff] font-[500] text-[16px] leading-[18px] rounded-[8px] border-[1px] border-[#a4a4a4]'>
            <img className='ml-[8px]' src={googlePlay} alt="Google Play" width={26} height={26}/>
            Google Play
          </button>
        </div>
      </div>
      <img src={takeWayImg} alt="Takeway-phone" width={216} height={417} />
    </section>
  )
}

export default Takeway