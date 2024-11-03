import "./Loading.css"

const Loading = ({count=3}) => {
  return (
    <div className="flex gap-[27px]  items-center justify-center ">
      {
        Array(count).fill("").map((_, inx)=> (
          <div key={inx} className="w-[300px]  p-3 rounded-tl-[25%]  rounded-b-[15%] rounded-tr-[20px] border-[1px] border-[#c6c6c6]">
            <div className="w-full h-60 bg-slate-300 rounded-tl-[80px]  rounded-b-[15%] rounded-tr-[30px] "></div>
            <div className="w-10/12 h-6 bg-slate-300 mt-3 ml-[10px] rounded-[30px]"></div>
            <div className="w-8/12 h-6 bg-slate-300 mt-3 ml-[10px] rounded-[30px]"></div>
          </div>
        ))
      }
    </div>
  )
}

export default Loading