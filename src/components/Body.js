import useOnline from "../utils/useOnline";
import RestaurantContainer from "./RestaurantContainer";
import NotConnected from "./NotConnected";

const Body = () => {
    const isOnline = useOnline();

    return !isOnline ? <NotConnected /> : (
        <div className="px-1 py-2">
            <RestaurantContainer />
        </div>
    )
}

export default Body;