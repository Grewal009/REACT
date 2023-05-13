import React, { useState } from 'react';
import RestaurantCard from "./RestaurantCard";
import { restList } from "../utils/mockData";
import {AiOutlineSearch} from 'react-icons/ai';


const RestaurantContainer = () => {
    
    console.log(restList);

    const [rest, setRest] = useState(restList);
    const [showRating, setShowRating] = useState(true);
    const [searchText, setSearchText] = useState("");

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
            <div className='flex flex-wrap justify-center'>
                <div className='my-2'>
                    <input type='text' name='searchTxt' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className='w-48 h-10 bg-slate-200 px-2 py-1 border-transparent border-gray-500 rounded-tl-2xl rounded-bl-2xl rounded-tr-none rounded-t
                    br-none text-lg font-medium focus:rounded-tl-2xl focus:rounded-bl-2xl focus:rounded-tr-none focus:rounded-br-none border-r-0' />

                    <button  className='w-20 h-10  border-1 border-transparent bg rounded-tr-2xl rounded-br-2xl text-lg font-medium bg-slate-300 hover:bg-slate-400'>Search</button>

                </div>

                <div className='my-2 ml-5'>
                    {
                        (showRating)
                        ?(<button className='w-36 px-3 py-1 bg-yellow-600 text-yellow-100 rounded-md hover:bg-yellow-100 hover:text-yellow-600 border-4 border-transparent hover:border-4 hover:border-yellow-600'
                        onClick={fourPlusRating}
                        >4+ rating</button>)
                        :(<button className='w-36 px-3 py-1 bg-yellow-600 text-yellow-100 rounded-md hover:bg-yellow-100 hover:text-yellow-600 border-4 border-transparent hover:border-4 hover:border-yellow-600'
                        onClick={allRestaurants}
                        >All Restaurant</button>)
                    }

                </div>
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