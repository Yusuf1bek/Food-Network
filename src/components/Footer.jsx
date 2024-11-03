import React from 'react'
import LogoIcon from "../assets/images/logo-icon.svg"
import footer1 from "../assets/images/footer-img1.svg"
import footer2 from "../assets/images/footer-img2.svg"
import footer3 from "../assets/images/footer-img3.svg"
import footer4 from "../assets/images/footer-img4.svg"

const Footer = () => {
  return (
    <footer className='w-[1140px] py-[100px] m-auto'>
      <ul className='flex items-start gap-[180px]'>
        <li>
          <img className='mb-[25px]' src={LogoIcon} alt="" />
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>www.company name.com</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>companyname@gmail.com</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Phone: +7 485-118-03-25</p>
        </li>
        <li>
          <strong className='font-[700] text-[18px] leading-[20px] mb-[22px] text-white inline-block'>Home</strong>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Landingpage</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Documentation</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Referral Program</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>UI & UX Design</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Web Design</p>
        </li>
        <li>
          <strong className='font-[700] text-[18px] leading-[20px] mb-[22px] text-white inline-block'>Menu</strong>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Landingpage</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Documentation</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Referral Program</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>UI & UX Design</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Web Design</p>
        </li>
        <li>
          <strong className='font-[700] text-[18px] leading-[20px] mb-[22px] text-white inline-block'>Company</strong>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Landingpage</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Documentation</p>
          <p className='font-[400] text-[14px] leading-[16px] mb-[12px] text-[#BDBDBD] hover:text-[#DC780B] duration-300 hover:cursor-pointer'>Referral Program</p>
          <div className='flex items-center gap-[10px]'>
            <img className='cursor-pointer' src={footer1} alt="Footer-Img" width={21} height={21}/>
            <img className='cursor-pointer' src={footer2} alt="Footer-Img" width={21} height={21}/>
            <img className='cursor-pointer' src={footer3} alt="Footer-Img" width={21} height={21}/>
            <img className='cursor-pointer' src={footer4} alt="Footer-Img" width={21} height={21}/>
          </div>
        </li>
      </ul>
    </footer>
  )
}

export default Footer