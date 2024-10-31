import React from 'react'
import {features} from "../static"
const Features = () => {
  const listItem = features?.map((obj) => (
    <li key={obj.id} className=''>
      <img className='ml-[120px]' src={obj.image} alt={obj.title} width={88} height={88}/>
      <h3 className='font-[700] text-[25px] leading-[24px] mb-[15px] mt-[33px]'>{obj.title}</h3>
      <p className='font-[400] text-[16px] leading-[24px]'>{obj.text}</p>
    </li>
  ))
  return (
    <div className='text-center mb-[123px]'>
      <strong className='uppercase text-[#DC780B] font-[400] text-[18px] leading-[18px] mb-[7px]'>Features</strong>
      <h2 className='font-[700] text-[31px] leading-[35px] mb-[44px]'>Food with a New Passion</h2>
      <ul className='flex items-center gap-[50px]'>
          {listItem}
      </ul>
    </div>
  )
}

export default Features