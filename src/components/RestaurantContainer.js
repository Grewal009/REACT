import React, { useState } from 'react';
import RestaurantCard from "./RestaurantCard";
import { restList } from "../utils/mockData";


const RestaurantContainer = () => {
    
    console.log(restList);

    const [rest, setRest] = useState(restList);
    const [showRating, setShowRating] = useState(true);

    function allRestaurants(){
        setRest(restList);
        setShowRating(!showRating);
    }

    function fourPlusRating(){
     const fourPlusRatingRestaurants = restList.filter(
            (res)=> res.data.avgRating > 4
        );
    console.log(fourPlusRatingRestaurants);
    setRest(fourPlusRatingRestaurants);
    setShowRating(!showRating);
    }

    return(

        <React.Fragment>
            <div>
                {
                    (showRating)
                    ?(<button className='w-40 px-3 py-1 bg-yellow-600 text-yellow-100 rounded-md hover:bg-yellow-100 hover:text-yellow-600 border-4 border-transparent hover:border-4 hover:border-yellow-600'
                    onClick={fourPlusRating}
                    >4+ rating</button>)
                    :(<button className='w-40 px-3 py-1 bg-yellow-600 text-yellow-100 rounded-md hover:bg-yellow-100 hover:text-yellow-600 border-4 border-transparent hover:border-4 hover:border-yellow-600'
                    onClick={allRestaurants}
                    >All Restaurant</button>)
                }
                

                

            </div>
            <div className="flex flex-wrap justify-center">
                {
                    rest.map((restaurant)=>(<RestaurantCard key={restaurant.data.id} restData={restaurant}/>))
                }
                
            </div>
        </React.Fragment>
    )
}

export default RestaurantContainer;