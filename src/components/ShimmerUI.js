

const ShimmerUI = () => {
  return (
    <>
    <div className="pt-14 flex flex-wrap justify-center">
      {
      Array(10).fill("").map((card, index)=>
        
      
          <div className="" key={index}>
            <div className="w-[230px] h-80 mx-1 my-1 p-1  border-2 border-transparent hover:border-gray-500 hover:shadow-md rounded-md">
                <img className="h-[137.320] w-[218] rounded-t-md bg-gray-300"/>

                <div className="">
                    <div className="w-14 h-6 p-1 flex justify-center items-center bg-gray-200 relative top-1 left-[158px]">
                        <h3 className="mr-1 text-xs font-bold text-yellow-100">{} </h3>
                        <span></span>
                    </div>

                </div>


                <h1 className="w-36 h-5 bg-gray-100 text-sm font-bold leading-4 relative -top-4 left-0">{}</h1>
                <h2 className="w-50 h-5 bg-gray-100 -mt-2 text-xs leading-4">{}</h2>
                

            </div>

          </div>
        
      )
      }

    </div>    
    </>
  )
}


export default ShimmerUI;