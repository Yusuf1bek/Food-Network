import React, {useEffect, useState} from 'react'
import axios from 'axios'
import starsImg from "../assets/images/stars.svg"
import Loading from "../components/Loading/Loading.jsx"

const BASE_URL = "https://dummyjson.com"

const Menu = () => {
  const [products, setProducts] = useState(null)
  useEffect(()=> {
    axios
        .get(`${BASE_URL}/products`)
        .then(res => {
          setProducts(res.data.products)
        })
        .catch(err => console.log(err))
        .finally()
  })
  const productItems = products?.map((item)=> (
    <li className='w-[360px] rounded-tl-[25%]  rounded-b-[15%] rounded-tr-[20px] border-[1px] border-[#c6c6c6]'>
      <img className='object-contain w-[468px] h-[200px] ' src={item.images[0]} alt={item.title}  />
      <div className='p-[25px] '>
        <div className='flex gap-[30px] '>
          <h3 className='font-[700] text-[20px] leading-[24px] mb-[10px] text-black'>{item.title}</h3>
          <strong className='font-[700] text-[20px] leading-[24px] text-black'>{item.price}$</strong>
        </div>
        <p className='font-[400] text-[16px] leading-[24px] text-[#150C01] mb-[20px]'>{item.description}</p>
        <div className='flex gap-[150px]'>
          <button className='w-[36px] h-[34px] bg-[#DC780B] rounded-[40%] text-white border-none'>+</button>
          <img src={starsImg} alt="Stars" width={88} height={16} />
        </div>
      </div>
    </li>
  ))
  return (
    <section>
      <div className='w-[700px] ml-[210px]'>
        <p className='text-center uppercase text-[#DC780B] font-[400] text-[18px] leading-[18px] mb-[7px]'>Menu</p>
        <h2 className='text-center font-[700] text-[31px] leading-[24px] mb-[25px]'>Food Full of treaty Love</h2>
        <p className='text-[#150C01] text-center font-[400] text-[16px] leading-[24px] mb-[60px]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
      </div>
      <ul className='flex gap-[30px] flex-wrap'>
        {productItems}
      </ul>
    </section>
  )
}

export default Menu