import React from 'react'
import testoMinalImg from "../assets/images/testominal-img.svg"
import starsImg from "../assets/images/stars.svg"

const Testominal = () => {
  return (
    <section className='text-center mt-[200px] mb-[120px]'>
        <div className='w-[750px] ml-[180px] mb-[73px]'>
            <strong className='uppercase text-[#DC780B] font-[400] text-[18px] leading-[18px] mb-[7px]'>Testimonial</strong>
            <h2 className='font-[700] text-[31px] leading-[40px] mb-[25px]'>Making Food great again and again</h2>
            <p className='text-[#150C01]  font-[400] text-[16px] leading-[24px] mb-[40px]'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
        </div>
        <div className='w-[506px] ml-[300px]'>
            <img className='mb-[42px] ml-[220px]' src={testoMinalImg} alt="Avatar" width={50} height={50}/>
            <p className='mb-[42px] font-[400] text-[16px] leading-[24px]'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
            <img className='ml-[210px]' src={starsImg} alt="Stars" width={88} height={16}/>
            <strong className='mt-[32px] mb-[6px] inline-block font-[400] text-[16px] leading-[28px]'>Augusta W. Reynoso</strong>
            <p className='font-[400] text-[12px] leading-[14px]'>UI&UX DeSIGNER</p>
        </div>
    </section>
  )
}

export default Testominal