import RestaurantCard from "./RestaurantCard";
import { restList } from "../utils/mockData";
import {useState} from 'react';

const RestaurantContainer = () => {
    //const {restaurants, setRestaurants} = useState(restList);
    console.log(restList);

    return(
        <div className="flex flex-wrap justify-center">
            {
                restList.map((restaurant)=>(<RestaurantCard key={restaurant.data.id} restData={restaurant}/>))
            }
            
        </div>
    )
}

export default RestaurantContainer;