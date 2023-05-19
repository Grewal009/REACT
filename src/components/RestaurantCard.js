
import { CDN_URL } from "../utils/constants";
import {AiFillStar} from 'react-icons/ai';

const RestaurantCard = (props) => {
    const {restData} = props;

    const {name, cloudinaryImageId, cuisines, avgRating=2.0} = restData.data;

    return(
        <div className="flex flex-nowrap">
            <div className="w-[230px] h-80 mx-1 my-1 p-1  border-2 border-transparent hover:border-gray-500 hover:shadow-md rounded-md">
                <img className="rounded-t-md" src={CDN_URL+cloudinaryImageId}/>

                <div className="">
                    <div className="w-14 p-1 flex justify-center items-center bg-yellow-600 relative top-1 left-[158px]">
                        <h3 className="mr-1 text-xs font-bold text-yellow-100">{avgRating === "--"? 2.1 : avgRating} </h3>
                        <span><AiFillStar size={18} className="text-yellow-100"/></span>
                    </div>

                </div>


                <h1 className="w-40 text-sm font-bold leading-4 relative -top-4 left-0">{name}</h1>
                <h2 className="w-50 -mt-2 text-xs leading-4">{cuisines?.join(', ')}</h2>
                

            </div>

        </div>
    )
}

export default RestaurantCard;
