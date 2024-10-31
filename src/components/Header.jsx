import React from 'react'
import { items } from "../static"
import LogoIcon from "../assets/images/logo-icon.svg"

const Header = () => {
  const listItem = items?.map((item, inx) => (
    <li>
      <a key={inx} href="#" className='font-[400] text-[15px] leading-[18px] hover:text-[#DC780B] duration-300'>{item}</a>
    </li>
  )) 
  return (
    <header className='flex items-center justify-between mb-[30px]'>
      <a href="#">
        <img src={LogoIcon} alt="Logo-Icon"  width={44} height={43}/>
      </a>
      <ul className='flex items-center gap-[30px] mr-[480px]'>
          {listItem }
      </ul>
      <button className='w-[155px] py-[10px] border-[1px] border-[#DC780B] text-white bg-[#DC780B] rounded-[8px] hover:bg-white hover:text-[#DC780B] duration-300'>Booking Now</button>
    </header>
  )
}

export default Header