

export function filterDate(searchText, allRest){
    return allRest.filter(
         (restaurant)=>restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
         
     );
 }