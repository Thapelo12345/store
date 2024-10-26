import React, { useEffect } from "react";
import { createItems } from "./pages-functions";
import { itemList } from '../Landing pages/Items'

function ViewAll(){
    
    useEffect(()=>{

    var allItemsArr = [...itemList]
    createItems(allItemsArr)

    }, [])//end of use 1 effect

    return(
        <>
        <div id = 'view-all-screen'>
        </div>
        </>
    )

}//end of view all


export { ViewAll }