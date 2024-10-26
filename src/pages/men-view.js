import React, { useEffect } from "react";
import { createItems } from "./pages-functions";
import { itemList } from '../Landing pages/Items'

function MenView(){

    useEffect(()=>{

var menArr = itemList.filter((item) =>{return item.picUrl.split('/').indexOf('male') !== -1})
        createItems(menArr)
    }, [])//end of effect

    return(
        <>
        <div id = 'view-all-screen'>
        </div>

        </>
    )
}

export { MenView }