import $ from 'jquery';
import '../header/header.css'
import { store } from '../status/store';
import { subtractAmount, sumbmitted, subtract } from '../status/actions';
import { userArr, emptyArray } from '../userPurchase/user-items';

var formDetails = {}

function openForms(formToOpen){
    if(formToOpen === 'order'){

$('.cart-button').prop('disabled', true)
  
        $('#order-form-container').css({
            visibility: 'visible',
            top: '3%',
            zIndex: '3',
            transform: 'scale(1)'
        })
    
    }
    else if(formToOpen === 'confirm'){
$('.cart-button').prop('disabled', true)

        $('#confirmation-form').css({
            visibility: 'visible',
            transform: 'scale(1)',
            zIndex: '3',
            left: '10%'
        })
    }
}//end of open func

function closeForms(formToClose){
  $('#confirmation-form').on('submit', (e)=>{e.preventDefault()})
  $('#order-form-container').on('submit', (e)=>{e.preventDefault()})

if(formToClose === 'order'){
        //closing order form
$('.cart-button').prop('disabled', false)

$('#order-form-container').css({
    transform: 'scale(.1)',
    top: '-30%'
})
let pause = setTimeout(()=>{
    $('#order-form-container').css({
        visibility: 'hidden',
        zIndex: '-3'
    })

    clearTimeout(pause)
}, 500)
//done closing order form

}//end of if

    else if(formToClose === 'confirm'){

$('.cart-button').prop('disabled', false)

        $('#confirmation-form').css({
            left: '0',
            transform: 'scale(.1)'
        })

        let delay = setTimeout(()=>{

            $('#confirmation-form').css({
                visibility: 'hidden',
                zIndex: '-3'
            })

            clearTimeout(delay)
        },500)
    }//end of else if
}//end of close form func

function cancel(){
//purchase button redo
    $("#purchase-button").css({
        textShadow: '1px 0px 0px black',
        boxShadow: 'none',
        border: 'none',
        backgroundImage: 'var(--nav-bg-img)'
    })//end of purchase button design

closeForms('order')

$('.cart-button').prop('disabled', false)


 $('#names').val('')
$('#surname').val('')
 $('#email').val('')
$('#address').val('')
 $('#phone').val('')//default empty sring

 $('.delivery').prop('checked', false)
 $('.payment').prop('checked', false)


}//end of cancel func


function orderFormSubmit(){
   
    $('#order-form-container').on('submit', (e)=>{e.preventDefault()})
    var valid = true
    let customerName = $('#names').val()
    let customerSurname = $('#surname').val()
    let customerEmail = $('#email').val()
    let customerAddress = $('#address').val()
    let customerPhone = $('#phone').val()//default empty sring

    let deliveryType = $('.delivery:checked').val();
    let paymentType = $('.payment:checked').val()//default undefined
    
    let id = $('#order-id').text()
    let arr = id.split(' ')
    let orderId = arr[arr.length - 1]
  
    let customerArr = [customerName, customerSurname, customerAddress, customerEmail, customerPhone]

    for(let i = 0; i < customerArr.length; i++){
        if(customerArr[i] === ''){
            valid = false
            break
        }
    }//end of 4 loop

    if(valid && (deliveryType !== undefined && paymentType !== undefined)){
        closeForms('order')
        openForms('confirm')

formDetails = {
    name: customerName,
    surname: customerSurname,
    email: customerEmail,
    address: customerAddress,
    phone: customerPhone,
    delivery: deliveryType,
    payment: paymentType,
    orderId: orderId
}//formDetails

store.dispatch(sumbmitted())

    }//end of if

    else{alert('Please fill in all required fields!')}//end of else

}//end of order form submit

function confirm(){

//lets reset store values
let amount = store.getState().price
store.dispatch(subtractAmount(amount))

userArr.forEach(()=>{userArr.pop()})

for(let i = store.getState().itemCount; i > 0; i--){store.dispatch(subtract())}

const dialog = document.getElementById('dialog')
dialog.showModal()
cancel()
closeForms('confirm')

// i need clear purchase arr
$('.useritemContainer').each(function(){
    $(this).remove()
})
emptyArray()
}//end of confirm func

export { cancel, openForms, closeForms, orderFormSubmit, formDetails, confirm }