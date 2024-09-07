import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import './min-cart-screen.css'
import { userArr } from '../userPurchase/user-items'
import { useSelector } from 'react-redux'
import { BinIcon } from '../Icons/icons'
import { store } from '../status/store'
import { subtractAmount, subtract } from '../status/actions'

var itemId = 1

function deleteItems(valueItem){

    let elementId = '#' + valueItem
    // console.log(valueItem.value)
    let picurl = $(elementId).children().first().attr('src')

    let pos = 0
    for(let i = 0; i < userArr.length; i++){
        if(userArr[i].picurl === picurl){
            pos = i
            break
        }//end of if

    }//end of 4loop
   
    // console.log(userArr)
    store.dispatch(subtractAmount(Number(userArr[pos].price)))
    store.dispatch(subtract())
    userArr.splice(pos, 1)
    itemId--
    
    if(userArr.length === 0){closeMiniScreen()}
    $(elementId).remove()

}//end of delete func

function openMiniScreen(){
   if(store.getState().itemCount > 0){
    $(".cart-button").prop('disabled', true)
    $('#outer-screen').css({
        visibility: 'visible',
        zIndex: '1'
    })
   }//end of if

   else{alert('CURRENTLY YOUR CART IS EMPTY!')}

}//end of open func

function closeMiniScreen(){
    $(".cart-button").prop('disabled', false)
// $('#mini-cart-screen').empty()

$('#outer-screen').css({
    visibility: 'hidden',
    zIndex: '-1'
})
    
}//end of close funct

function CartMiniScreen() {
var testCounter = useSelector((state)=> state.itemCount)
var [crrCount , setCounter] = useState(store.getState().itemCount)


useEffect(()=>{

    if(crrCount < store.getState().itemCount){
    setCounter(store.getState().itemCount)

    if(userArr.length !== 0){
    let ob = userArr[userArr.length - 1]

        let itemContainer = document.createElement('div')
        $(itemContainer).addClass('useritemContainer')
        $(itemContainer).attr('id', itemId.toString())
    
        let itemPic = document.createElement('img')
        $(itemPic).addClass('cart-item-pic')
        $(itemPic).attr('src', ob.picurl)
    
        let itemPrice = document.createElement('h4')
        $(itemPrice).addClass('labels')
        $(itemPrice).text('price: ')

        let priceValue = document.createElement('span')
        $(priceValue).addClass('value-display')
        $(priceValue).text(ob.price.toString())

        $(itemPrice).append($(priceValue))

        let itemColor = document.createElement('h4')
        $(itemColor).addClass('labels')
        // $(itemColor).text('color: ' + item.color)
        $(itemColor).text('color: ')

        let colorValue = document.createElement('span')
        $(colorValue).addClass('value-display')
        $(colorValue).text(ob.color)

        $(itemColor).append($(colorValue))

        let itemSize = document.createElement('h4')
        $(itemSize).addClass('labels')
        $(itemSize).text('size: ')

        let sizeValue = document.createElement('span')
        $(sizeValue).addClass('value-display')
        $(sizeValue).text(ob.size)

        $(itemSize).append($(sizeValue))
    
        let icon = document.createElement('img')
        $(icon).addClass('bin-icon')
        $(icon).attr('src', "./Pics/Bin-icon.png")
        $(icon).attr('z-index', '-1')

        let deleteButton = document.createElement('button')
        $(deleteButton).addClass('delete-button')
        $(deleteButton).attr('value', itemId.toString())
        // $(deleteButton).prop('value', itemId.toString())
        // $(deleteButton).append(icon)
        $(deleteButton).text('delete')
        $(deleteButton).click((e)=>{

            console.log(e.target.value)
            deleteItems(e.target.value)
        })

        itemId += 1

        $(itemContainer).append($(itemPic),$(itemColor), $(itemSize), $(itemPrice), $(deleteButton))
        $('#mini-cart-screen').append(itemContainer)

}//end of if    

    }//end of outer if
    else{setCounter(store.getState().itemCount)}
}, [testCounter])

  return (
    <>
    <div id = 'outer-screen'>
    <div id = 'mini-cart-screen'></div>
    <button id = 'close-button' onClick={closeMiniScreen}>Close</button>
    </div>
    </>
  )
}

export { CartMiniScreen, openMiniScreen }