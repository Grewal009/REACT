

const NotConnected = () => {
    return(
        <div className="w-full h-[200px] sm:h-[300px] flex justify-center items-center">
            <div className="">
                <h1 className="w-72 m-auto sm:w-96 p-2 text-sm md:text-lg font-bold text-gray-700 text-center bg-red-200 rounded-3xl">You are not connected to the Internet</h1>
            </div>   
        </div> 
    )
}

export default NotConnected;