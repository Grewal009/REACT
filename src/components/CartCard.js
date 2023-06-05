import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice"; 
import { useDispatch } from "react-redux";

const CartCard = ({item}) => {

    const [quantity, setQuantity] = useState(1);
    console.log('cart',item);
    const {name, price, imageId} = item;
    const dispatch = useDispatch();

    function increment(){
        setQuantity(quantity + 1);
    }
    function decrement(){
        if(quantity === 1 || quantity === 0){
            setQuantity(0);
        }
        else{
        setQuantity(quantity - 1);
        }
    }

    
    return(
        <div className="my-4 flex justify-center">
            <div className="w-[350px] sm:w-[550px] md:w-[650px] p-1 flex justify-between border-gray-500 items-center shadow-md shadow-slate-800">
                <div className="w-40 ">
                    <img src={CDN_URL + imageId} className="w-28"/>
                    <h1 className="text-sm font-bold leading-4">{name}</h1>
                </div>

                <div>
                    <button onClick={()=>decrement(item)} className="w-6 h-6 bg-slate-300 hover:bg-slate-400 font-extrabold">-</button>
                    <span className="mx-2">{quantity}</span>
                    <button onClick={()=>increment()} className="w-6 h-6 bg-slate-300 hover:bg-slate-400 font-extrabold">+</button>
                </div>

                <div><h2 className="text-sm ">Rs: {(price / 100) * quantity}/-</h2></div>
            </div>
        </div>
    )
}

export default CartCard;