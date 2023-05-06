import {GiHotMeal} from 'react-icons/gi';

const Header = () => {
    return(
        <div>
            <div className="h-24 w-full p-2 border bottom-3 border-blue-500 bg-orange-300">
                <div>
                    <div>
                        <GiHotMeal size={70} className='mx-2 text-amber-900'/>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header;