

const Section = ({heading, para, isVisible, setIsVisible}) => {
    return(
        <div>
            <div className="m-2 p-2 border border-gray-500">
                {
                    !isVisible
                    ?(
                    <div onClick={setIsVisible} className="px-2 flex justify-between items-center bg-slate-200 cursor-pointer">
                        <h3 className=" text-lg font-bold ">{heading}</h3>
                        <p>🔽</p>
                    </div>
                    )
                    :
                    (<div>
                    <div onClick={setIsVisible} className="px-2 flex justify-between items-center bg-slate-200 cursor-pointer">
                        <h3 className="text-lg font-bold">{heading}</h3>
                        <p>🔼</p>
                    </div>
                    <p className="px-2 py-2 text-sm leading-4">{para}</p></div>)
                }
                
            </div>
        </div>
    )
}

export default Section;