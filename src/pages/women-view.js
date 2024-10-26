import React, { useEffect } from "react";
import { createItems } from "./pages-functions";
import { itemList } from '../Landing pages/Items'

function WomenView(){

    useEffect(()=>{

var femaleArr = itemList.filter((item) =>{return item.picUrl.split('/').indexOf('female') !== -1})

     createItems(femaleArr) 

    }, [])//end of effect

    return(
        <>
        <div id = 'view-all-screen'>
        </div>
        </>
    )
}

export { WomenView }