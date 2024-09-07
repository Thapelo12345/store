import { openForms } from '../forms/forms-functions'
import { store } from '../status/store'
import $ from 'jquery'
// import { openOrderForm } from '../forms/order-functions';

function selectMenu(idToChangeBack){

$(idToChangeBack).children().first().css({
    transform: 'scale(1)',
    top: '10%',
    background: 'none'
})

$(idToChangeBack).children().eq(1).css({
    zIndex: '-1',
    visibility: 'hidden'
})
    let val = store.getState().navigator.navigate
    let Id = '#' + val


    $(Id).children().first().css({
        top: '-20%'
    })

    $(Id).children().css({
      zIndex: '0',
      visibility: 'visible'
    })

    
}//end of select menu func

function purchase(){
    if(store.getState().itemCount !== 0){

        openForms('order')

        // $('body').css('overflow', 'hidden')
        $("#purchase-button").css({
            textShadow: '1px 0px 0px black',
            boxShadow: '1px 9px 30px lime',
            border: '1px solid lime',
            backgroundImage: 'linear-gradient(0deg, lime, white)'
        })//end of purchase button design

        let arr = []
        for(let i = 0; i < 6; i++){
            arr.length === 0 ? arr.unshift(Math.floor(Math.random() * 9).toString()) : arr.push(Math.floor(Math.random() * 9).toString())

        }//end of for loop

        let orderId = '#' + arr.join("")

        
    }//end of outer if 

    else{ alert('SORRY BUT THEY ARE NO ITEMS IN YOUR CART TO PURCHASE!') }//end of outer else

}//end of purchase func

export { selectMenu, purchase }