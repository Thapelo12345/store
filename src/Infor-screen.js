import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import './header/header.css';
import './infor-screen.css'
import { store } from './status/store'
import { add, addAmount } from "./status/actions";
import {  addAnItem } from './userPurchase/user-items'

// var confirmClicked = false
function deleteComponents(){
    
    $('#color-selector').empty()
    $('#size-selector').empty()

    $('.cart-button').prop('disabled', false)

    $('#infor-image').css('visibility', 'hidden')
    $('#infor-image').attr('src', null)

    $('.infor-buttons').prop('disabled', true)
    $('.infor-buttons').css('visibility', 'hidden')

    $('#size-selected-label').css('visibility', 'hidden')
    $('#color-selected-label').css('visibility', 'hidden') 
    $('.selected-labels').css('visibility', 'hidden')

    $('#infor-screen').css({
        transform: 'scale(1)',
        left: '78%',
        top: '20%',
        zIndex: '-3',
        boxShadow: 'none'
    })

}//end of delete components funct

function confirm(pic, colour, size, price){
    if((pic !== '' && size !== undefined) && (colour !== undefined && price !== '')){
      
    if(store.getState().itemCount < 10){

    store.dispatch(add())
    store.dispatch(addAmount(Number(price)))
 
    let item = {
        picurl: pic,
        color: colour,
        size: size,
        price: price
    }

    addAnItem(item)
    deleteComponents()
    }//end of inner if

    else{
        alert('YOU CANT ORDER MORE THAN 10 ITEMS!!')
    }//end of inner else 

    }//end of if
   
    else{alert('You have not selected a colour or set the size!')}
}//end of customer funct

var item;

function InforScreen(props){

    const [savePic, setPic] = useState(undefined)

    const [finalColor, setColor] = useState(undefined)

    const [saveSize , setSaveSize] = useState('')
   
    const [priceTag, setPrice] = useState(undefined)


useEffect(()=>{
item = props.itemInfor
var str = item.picUrl

setColor(undefined)
setSaveSize(undefined)
setPrice(undefined)

if(str !== undefined){

setPic(props.itemInfor.picUrl)
setPrice(props.itemInfor.price.toString())

$('#infor-screen').css({
    transform: 'scale(1.2)',
    left: '40%',
    top: '10%',
    zIndex: '2',
    boxShadow: '.1px 9px 30px black'
})
$('.cart-button').prop('disabled', true)
$('.infor-buttons').prop('disabled', false)
$('.infor-buttons').css('visibility', 'visible')

$('#infor-image').css('visibility', 'visible')

$('#color-selected-label').css('visibility', 'visible') 
$('#size-selected-label').css('visibility', 'visible')
$('.selected-labels').css('visibility', 'visible')

let arr = str.split('/')
// str = undefined 
    let type = arr[arr.length - 2]

if(item.colors.length > 1){

item.colors.forEach((color)=>{

let label = document.createElement('label')
$(label).text(color)
$(label).addClass('color-label')

let colorButton = document.createElement('button')
$(colorButton).addClass('color-buttons')
$(colorButton).attr('value', color)
$(colorButton).click((e)=>{setColor(e.target.value)})

$(colorButton).html($(label))
// $(selectorContainer).append($(colorButton), $(label))
$('#color-selector').append($(colorButton))
        })//end of each loop

    }//end of inner if 

else{setColor(item.colors[0])}//end of else

if(type === 't-shirt'){
        let sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

        sizes.forEach((size)=>{


    let sizeButton = document.createElement('button')
    $(sizeButton).addClass('size-buttons')
    $(sizeButton).attr('value', size)
    $(sizeButton).click((e)=>{
        setSaveSize(e.target.value)
    })

    let label = document.createElement('label')
    $(label).addClass('size-label')
    $(label).text(size)

    $(sizeButton).html($(label))
    $('#size-selector').append($(sizeButton))
        })//end of each loop

    }//end of type if 

    else if(type === 'jeans' || type === 'shoes'){

        let form = document.createElement('form')
        $(form).attr('name', 'size')
        // $(submit).attr('type', 'submit')
        
        let input = document.createElement('input')
        $(input).attr('type', 'number')
        $(input).attr('id','size-input')
        $(input).attr('name','size')

        if(type === 'jeans'){
        $(input).attr('min','20')
        $(input).attr('max','45')
        }

        else if(type === 'shoes'){
        $(input).attr('min','2')
        $(input).attr('max','10')
        }
        
        let submit = document.createElement('button')
        $(submit).attr('value', 'submit')
        $(submit).attr('id', 'submit-button')
        $(submit).text('Submit-size')
        $(submit).attr('name', 'size')
        $(submit).attr('type', 'submit')
        $(submit).click((e)=>{

            e.preventDefault() 
            let value = document.getElementById('size-input').value

            if(Number(value) !== NaN){
                if(type === 'jeans'){
                    if(Number(value) >= 20 && Number(value) <= 45){setSaveSize(value)}
                    else{alert('SIZE SHOULD BE BETWEEN 20 AND 45')}
                }
                else if(type === 'shoes'){
                    if(Number(value) >= 2 && Number(value) <= 10){setSaveSize(value)}
                    else{alert('SEIZE SHOULD BE BETWEEN 2 AND 10')}
                }
                
                else{
                    alert('YOU HAVE ENTERED AN INVALID SIZE FOR THIS ITEM!..')
                }
            }
        })

        $(form).append($(input))
        $(form).append($(submit))
        $('#size-selector').append($(form))

        // setSaveSize(document.getElementById('size-input').value)

    }//end of else if

else{setSaveSize('Unisize')}

}//end of undefined if 

},[props.itemInfor])//end of use effect

    return(

<div id = 'infor-screen'>

<h1 id = 'infor-header'>item infor</h1>

<div id = 'details-selection'>
<img id = 'infor-image' src = {savePic} alt='item-image'></img>

<h3 className = 'selected-labels'>SELECTED COLOUR : <span className = 'selected-values'> {finalColor}</span></h3>
<div id = 'color-selector'></div>

<h3 className = 'selected-labels'>SELECTED SIZE : <span className = 'selected-values'> {saveSize}</span></h3>
<div id = 'size-selector'></div>

</div>

<button className = 'infor-buttons' onClick={()=>{
    deleteComponents()
}}>Cancel</button>

<button className = 'infor-buttons' onClick={()=>{
    confirm(savePic, finalColor, saveSize, priceTag)
}}>Continue</button>
</div>
    )
}//end of comp

export { InforScreen }