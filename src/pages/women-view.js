import React, { useEffect, useState } from "react";
import $ from 'jquery';
import './viewAll.css'
import { itemList } from '../Landing pages/Items'
import { InforScreen } from "../Infor-screen";

function WomenView(){

    const [itemInfor, setObj] = useState({})   

    useEffect(()=>{

        var femaleArr = itemList.filter((item)=>{
            let tempArr = item.picUrl.split('/')
            if(tempArr.indexOf('female') !== -1){return item}
        })
        
        var pos = Math.floor(Math.random() * femaleArr.length)
        var randomPics = [femaleArr[pos]]
        femaleArr.splice(pos, 1)
        
        while(femaleArr.length !== 0){
            pos = Math.floor(Math.random() * femaleArr.length)
            randomPics.push(femaleArr[pos])
            femaleArr.splice(pos,1)
        
        }//end of while loop
    
        randomPics.forEach((item)=>{
            let container = document.createElement('div')
            $(container).addClass('item-display')
            $(container).attr('id', item.id.toString())

            let pic = document.createElement('img')
            $(pic).addClass('pic')
            $(pic).attr('src', item.picUrl)
            $(pic).attr('alt', 'Item-image')
            
            let priceTag = document.createElement('h1')
            $(priceTag).addClass('price-tag')
            $(priceTag).html('R ' + item.price.toString())

            let cartButton = document.createElement('button')
            $(cartButton).addClass('cart-button')
            $(cartButton).html('+Add cart')
            $(cartButton).attr('id', item.id.toString())
            $(cartButton).click((e)=>{
                addToCart(e.target)
            })

        $(container).append($(pic)) 
        $(container).append($(priceTag))
        $(container).append($(cartButton))
        $('#view-all-screen').append($(container))

        })//end of each loop

    }, [])//end of effect

    function addToCart(val){

        // store.dispatch(add())
        let crrId = val.id
    //    console.log($('#'+ crrId).attr('id'))

        let url = $('#' + crrId).children().first().attr('src')
        let itemPos;
    
        for(let i = 0; i < itemList.length; i++){
            if(itemList[i].picUrl === url){
                itemPos = i
                break
            }
        }//end of 4 loop
        
        let itemObj = itemList[itemPos]
    
        setObj({
            picUrl : itemObj.picUrl,
            colors: itemObj.colors,
            price: itemObj.price
        })
        
        }//end of addTo cart func

    return(
        <>
        <InforScreen itemInfor = {itemInfor}/>
        
        <div id = 'view-all-screen'>
        </div>

        </>
    )
}

export { WomenView }