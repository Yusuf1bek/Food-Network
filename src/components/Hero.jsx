import React from 'react'
import HeroImg from "../assets/images/hero-img.png"

const Hero = () => {
  return (
    <section className='flex items-center gap-[20px] mb-[113px]'>
      <div className='w-[577px] p-2'>
        <h1 className='font-[700] text-[48px] leading-[57px] mb-[42px]'>Making time a good time by making food the good food.</h1>
        <p className='font-[500] text-[16px] leading-[24px] mb-[50px]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
        <div className='flex gap-[30px]'>
          <button className='w-[155px] py-[10px] border-[1px] border-[#DC780B] text-white bg-[#DC780B] rounded-[8px] hover:bg-white hover:text-[#DC780B] duration-300'>Order Now</button>
          <button className='w-[155px] py-[10px] border-[1px] border-[#DC780B] text-[#DC780B] bg-white rounded-[8px] hover:bg-[#DC780B] hover:text-white duration-300'>Food Details</button>
        </div>
      </div>
      <img src={HeroImg} alt="Hero-Img" width={576} height={608}/>
    </section>
  )
}

export default Hero