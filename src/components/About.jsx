import React from 'react'
import aboutImg from "../assets/images/about-img.png"

const About = () => {
  return (
    <section className='flex items-center gap-[97px] mb-[115px]'>
        <img src={aboutImg} alt="About-Img" width={555} height={500}/>
        <div className='w-[452px]'> 
            <strong className='uppercase font-[400] text-[16px] leading-[24px] mb-[10px] text-[#DC780B]'>About us</strong>
            <h2 className='font-[700] text-[31px] leading-[40px] mb-[30px]'>Food Stalls with Persons but  to  Product marketing plane
            catlogues etc to. </h2>
            <p className='font-[400] text-[14px] leading-[24px] text-[#150C01] mb-[29px]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
            equipment  make your marketing plane Effective.</p>
            <button className='w-[155px] py-[10px] border-[1px] border-[#DC780B] text-white bg-[#DC780B] rounded-[8px] hover:bg-white hover:text-[#DC780B] duration-300'>Read More</button>
        </div>
    </section>
  )
}

export default About