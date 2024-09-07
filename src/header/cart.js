import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import './header.css';
import {  CartIcon, BinIcon } from '../Icons/icons'
import { store } from '../status/store';
import { openMiniScreen } from '../min-cart-screen/mini-cart-screen';

function Cart(props){
 var testPrice = useSelector((state)=> state.price)
 
    const [amount, setAmount] = useState(0)
    const [counter, setCounter] = useState(0)

useEffect(()=>{
    
    setAmount(store.getState().price)
    setCounter(store.getState().itemCount)

},[testPrice])//end of use effect

return(
 
<div id = 'cart-price'>
<div id = 'price'>

<label>Amount: R<span>{amount}</span></label>
</div>

<div id = 'cart'>

<label>Items: <span id = 'number-of-items'>{counter}</span></label>

 <button id = 'svg-button' onClick= {openMiniScreen}><CartIcon /></button>


</div>
         
</div>
    )
}//end of cart coppanent

export { Cart }