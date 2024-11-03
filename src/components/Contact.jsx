import React from 'react'

const Contact = () => {
  return (
    <section id="contact us" className='text-center w-[965px] py-[100px] m-auto'>
        <div className='w-[750px] ml-[100px]'>
            <strong className='uppercase text-[#DC780B] font-[400] text-[18px] leading-[18px] mb-[7px]'>Contact </strong>
            <h2 className='font-[700] text-[31px] leading-[35px] mb-[44px]'>Food Stalls with Persons but also specialized equipment, Skills to manage.</h2>
            <div>
              <input type="text" placeholder='Enter your message' className='py-[16px] pl-[32px] pr-[200px] rounded-lg outline-none border-none'/>
              <button className='w-[150px] py-[15px] text-white bg-[#DC780B] border-none rounded-lg'>Send</button>
            </div>
        </div>
    </section>
  )
}

export default Contact