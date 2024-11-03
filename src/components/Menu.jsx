import React, {useEffect, useState} from 'react'
import axios from '../api'
import starsImg from "../assets/images/stars.svg"
import Loading from "../components/Loading/Loading.jsx"
import { useFetch } from '../hooks/useFetch'
import { toast } from 'react-toastify'


const Menu = () => {
  const count = 3
  const [category, setCategory] = useState("/")
  const [offset, setOffset] = useState(1)
  const {data, loading, error} = useFetch(`/products${category}`, {limit:offset*count}, [offset, category])
  const {data: categories} = useFetch("/products/category-list")
  useEffect(()=>{
    setOffset(1)
}, [category])

const categoryItems = categories?.map((item)=> (
  <li 
      onClick={()=> setCategory(`/category/${item}`)}
      className={`whitespace-nowrap cursor-pointer ${`/category/${item}` === category ? "text-[#DC780B]": "text-black hover:text-[#DC780B] bg-transparent duration-300"}`}
      key={item}>
      {item}
  </li>
))

  const productItems = data?.products?.map((item)=> (
    <li className='w-[300px] rounded-tl-[25%]  rounded-b-[10px] rounded-tr-[20px] border-[1px] border-[#c6c6c6]'>
      <img onClick={()=> toast.info(item.description)} className='object-contain w-[468px] h-[200px] bg-slate-400 rounded-tl-[25%]  rounded-br-[25%] rounded-tr-[20px]' src={item.images[0]} alt={item.title}  />
      <div className='p-[25px] '>
        <div className='flex gap-[30px] '>
          <h3 className='font-[700] text-[20px] leading-[24px] mb-[10px] text-black'>{item.title}</h3>
          <strong className='font-[700] text-[20px] leading-[24px] text-black'>{item.price}$</strong>
        </div>
        <p className='font-[400] text-[16px] leading-[24px] text-[#150C01] mb-[20px]'>{item.description}</p>
        <div className='flex gap-[130px]'>
          <button onClick={()=> toast.success("Added to cart")} className='w-[36px] h-[34px] bg-[#DC780B] rounded-[40%] text-white border-none'>+</button>
          <img src={starsImg} alt="Stars" width={88} height={16} />
        </div>
      </div>
    </li>
  ))
  return (
    <section id="menu" className='mb-[179px]'>
      <div className='w-[700px] ml-[210px]'>
        <p className='text-center uppercase text-[#DC780B] font-[400] text-[18px] leading-[18px] mb-[7px]'>Menu</p>
        <h2 className='text-center font-[700] text-[31px] leading-[24px] mb-[25px]'>Food Full of treaty Love</h2>
        <p className='text-[#150C01] text-center font-[400] text-[16px] leading-[24px] mb-[60px]'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
      </div>
      <ul className='flex gap-6  overflow-auto p-6'>
            <li onClick={()=> setCategory("/")} className={`whitespace-nowrap cursor-pointer ${`/` === category ? "text-[#DC780B]": "text-black hover:text-[#DC780B] bg-transparent duration-300"}`} >All</li>
            {categoryItems}
        </ul>
      <ul className='flex gap-[30px] flex-wrap pt-[70px] items-start justify-center'>
        {productItems}
      </ul>
        {loading && <Loading count={count}/>}
        {
            offset*count < data?.total &&
          <button 
            onClick={()=> setOffset(p => p + 1)} 
            className="ml-[500px] mt-[40px] text-xl w-32 h-12 rounded bg-[#DC780B] text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
            <span className="absolute bg-[#a56520] w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
            <span className="absolute bg-[#855119] w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              {loading ? "Loading...": "See more"}
          </button>
        }
    </section>
  )
}

export default Menu