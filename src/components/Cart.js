import { useSelector } from "react-redux";


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);

    console.log("cartItems ", cartItems)
    return(
        <div>
            {
            
            }
        </div>
    )
}

export default Cart;