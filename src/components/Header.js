import {GiHotMeal} from 'react-icons/gi';
import {FaBars, FaTimes} from 'react-icons/fa';
import {HiShoppingCart} from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { useState } from 'react';

const Header = () => {
    const [nav, setNav] = useState(false);
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const handleClick = () => setNav(!nav);

    const normalLink = "";
    const activeLink = "underline underline-offset-8 decoration-lime-600 decoration-4";

    return(
        <div>
        <div className='px-4 border-b-2 shadow-md'>
            <div className="h-20 w-full p-2  ">

                <div className='flex justify-between items-center '>
                    <a href='/'>
                        <GiHotMeal size={60} className='mx-2 text-amber-900'/>
                    </a>
                    
                
                <div className='hidden  sm:flex sm:justify-start'>
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
                        <li className='mx-2 pr-2 py-1 text-lg font-bold  text-gray-600 hover:text-black'><span>{cartItems?.length} </span>Cart</li>
                    
                    </NavLink>

                    </ul>
                </div>

                {/**
                 * Hamburger Menu
                 */}  

                    <div className='sm:hidden'><NavLink to="/cart" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                            {
                                //<HiShoppingCart size={35} className='mx-2 bg-green-500'/>
                            }
                        <p className='mt-[2px] text-lg font-bold  text-gray-600 hover:text-black'><span>{cartItems?.length} </span>Cart</p>
                    </NavLink></div>

                 <div onClick={handleClick} className='sm:hidden z-20'>
                {
                    !nav? <FaBars size={30}/> : <FaTimes size={30}/>
                }
                </div>          
                <div className={!nav ? "hidden" : "sm:hidden absolute top-0 left-0 w-full h-screen bg-slate-100 z-10"}>
                    <ul className='h-screen flex flex-col justify-center items-center'>
                        <NavLink onClick={handleClick} to="/" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                        <li className='mx-2 py-2 text-4xl font-bold text-gray-600 hover:text-black'>HOME</li>
                        </NavLink>
                        
                        <NavLink onClick={handleClick} to="/about" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                        <li className='mx-2  py-2 text-4xl font-bold text-gray-600 hover:text-black'>ABOUT</li>
                        </NavLink>

                        <NavLink onClick={handleClick} to="/contact" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                        <li className='mx-2 py-2 text-4xl font-bold  text-gray-600 hover:text-black'>CONTACT</li>
                        </NavLink>

                    
                    {/**
                     <NavLink onClick={handleClick} to="/cart" className={( {isActive} ) =>
                        isActive ? activeLink : normalLink
                         }>
                            {
                                //<HiShoppingCart size={35} className='mx-2 bg-green-500'/>
                            }
                        <li className='mx-2 pr-2 py-1 text-lg font-bold  text-gray-600 hover:text-black'><span>{cartItems?.length} </span>Cart</li>
                    
                    </NavLink>
                     */}

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
        </div>
    )
}

export default Header;