import React from 'react';
import { NavBar } from './nav';
import { Cart } from './cart'
import { CartMiniScreen } from '../min-cart-screen/mini-cart-screen'
import { purchase } from './header-functions';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import './header.css';
import { store } from '../status/store'
import { changeNavigator } from '../status/actions';

function Header() {
    
const [amountPrice, setAmount] = useState(0)
const [counter, setCounter] = useState(0)

useEffect(()=>{

    //reseting all nav text
    $('.nav-button').children().eq(1).css({
        zIndex: '-1',
        visibility: 'hidden'
    })
    //done reserting nav text

    let arr = window.location.href.split('/')
    let crrId = arr[arr.length - 1]

    if(crrId === ''){
        store.dispatch(changeNavigator('home'))
        document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, steelblue, blue)')
        $('#bg').css({
            left: '8%'
        })

        $("#home").children().first().css({
            top: '-20%'
        })
    
        $("#home").children().css({
          zIndex: '0',
          visibility: 'visible'
        })
    
    }//end of if

    else if(crrId === 'view-all'){
        store.dispatch(changeNavigator('all_items'))
        document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, rgb(177, 156,217), purple)')
        $('#bg').css({
            left: '25.4%'
        })

        $("#all_items").children().first().css({
            top: '-20%'
        })
    
        $("#all_items").children().css({
          zIndex: '0',
          visibility: 'visible'
        })
    }//end of esle if

    else if(crrId === 'women'){
        store.dispatch(changeNavigator('women'))
        document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, pink, #c11c84)')
        $('#bg').css({
            left: '42.2%'
        })

        $("#women").children().first().css({
            top: '-20%'
        })
    
        $("#women").children().css({
          zIndex: '0',
          visibility: 'visible'
        })
    }//end of esle if

    else if(crrId === 'men'){
        store.dispatch(changeNavigator('men'))
        document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, skyblue, steelblue)')

        $('#bg').css({
            left: '59%'
        })

        $("#men").children().first().css({
            top: '-20%'
        })
    
        $("#men").children().css({
          zIndex: '0',
          visibility: 'visible'
        })
    }//end of esle if


    else if(crrId === 'accessories'){
    store.dispatch(changeNavigator('accessories'))
    document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, whitesmoke, orange, tan)')

    $('#bg').css({
        left: '76%'
    })

    $("#accessories").children().first().css({
        top: '-20%'
    })

    $("#accessories").children().css({
      zIndex: '0',
      visibility: 'visible'
    })

    }//end of esle if

 
}, [])//home button effect

useEffect(()=>{

setAmount(store.getState().price)
setCounter(store.getState().itemCount)

}, [store.getState().price])//end of effect

return(

<div id = "header">
<NavBar />
<Cart amountPrice = {amountPrice} counter = {counter}/>
<CartMiniScreen />
<button id  = 'purchase-button' onClick = {purchase }>Purchase</button>
</div>

    )
}//end of header component

export default Header