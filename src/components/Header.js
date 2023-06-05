import {GiHotMeal} from 'react-icons/gi';
import {HiShoppingCart} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../utils/store';

const Header = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const normalLink = "";
    const activeLink = "underline underline-offset-4 decoration-lime-600 decoration-4";

    return(
        <div className='px-4 border-b-2 shadow-md'>
            <div className="h-20 w-full p-2  ">

                <div className='flex justify-between items-center '>
                    <a href='/'>
                        <GiHotMeal size={60} className='mx-2 text-amber-900'/>
                    </a>
                    
                
                <div className='flex justify-start'>
                    <ul className='flex'>
                        <NavLink to="/" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                        <li className='mx-2 py-1 text-lg font-bold text-gray-600 hover:text-black'>HOME</li>
                        </NavLink>
                        
                        <NavLink to="/about" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                        <li className='mx-2  py-1 text-lg font-bold text-gray-600 hover:text-black'>ABOUT</li>
                        </NavLink>

                        <NavLink to="/contact" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                        <li className='mx-2 py-1 text-lg font-bold  text-gray-600 hover:text-black'>CONTACT</li>
                        </NavLink>

                    
                    <NavLink to="/cart" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                            {
                                //<HiShoppingCart size={35} className='mx-2 bg-green-500'/>
                            }
                        <li className='mx-2 pr-2 py-1 text-lg font-bold  text-gray-600 hover:text-black'><span>{cartItems.length} </span>Cart</li>
                    
                    </NavLink>

                    </ul>
                </div>

                    {/** 
                      <div className='flex'>
                        <button className='px-3 py-2 mx-2 text-lg text-gray-600 hover:text-black font-bold bg-blue-400 rounded-md'>Log in</button>
                        <button className='px-3 py-2 mx-2 text-lg text-gray-600 hover:text-black font-bold bg-blue-400 rounded-md'>Sign up</button>
                    </div>
                     
                    */
                    }



                   

                </div>


            </div>

        </div>
    )
}

export default Header;