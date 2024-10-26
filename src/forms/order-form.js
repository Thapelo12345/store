import React from 'react'
import './order-form.css'
import './order-form-mobile.css'
import { cancel, closeForms, orderFormSubmit } from './forms-functions'

//date setUp
var date = new Date().toString()
var dateArr = date.split(' ')
var minSecArr = dateArr[4].split(':')
var formatedTime = minSecArr[0] + ':'+ minSecArr[1]
var formatedDate = dateArr[2] + ' ' + dateArr[1] + ' ' + dateArr[3] + ' ' + dateArr[0] + ' ' + formatedTime
//done date setUp

//order Id set up
var idArr = [];
for(let i = 0; i < 6; i++){

    let digit = Math.floor(Math.random() * 9)
    idArr.length === 0 ? idArr.unshift(digit) : idArr.push(digit)
}//end of 4 loop

var orderId = 'OrderId   #' + idArr.join('')

//dine order Id setUp
function OrderForm(){

  return (
    <form id = 'order-form-container'>
    <fieldset id = 'form-border'>
        <legend id = 'form-header' className = 'legend-labels'>ORDER FORM</legend>

    <section id = 'form-date'> 
<label className = 'date-labels'>{formatedDate}</label>
<label className = 'date-labels' id = 'order-id'>{orderId}</label>
    </section>

    <fieldset id = 'customer-details-section'>
    <legend className = 'legend-labels'>Customer infor</legend>
        <label className = 'customers-details-label' htmlFor = 'names' required>Name</label>
        <input type = 'text' id = 'names' ></input><br />

        <label className='customers-details-label' htmlFor = 'surname' required>Surname</label>
        <input type = 'text' id = 'surname'></input><br />

        <label className='customers-details-label' htmlFor = 'email'>Email</label>
        <input type = 'email' id = 'email' placeholder='paypal email if possible'></input><br />

        <label className='customers-details-label' htmlFor = 'phone' required>Tel no:</label>
        <input type = 'tel' id = 'phone'></input><br />

        <label className='customers-details-label' htmlFor = 'address'>Address</label>
        <input type = 'text' id = 'address' required></input><br />
    </fieldset>

    <section id = 'payment-delivery'>

        <fieldset id = 'delivery-section' className = 'payment-and-delivery'>
            <legend className = 'legend-labels'>DELIVERY</legend>

            <input type = 'radio' name = 'delivery' className = 'delivery' id = 'drop' value = 'drop off' required></input>
            <label htmlFor = 'drop' className = 'radio-labels'>Drop Off</label>

            <input type='radio' name = 'delivery' className = 'delivery' id = 'pickUp' value = 'pick up'></input>
            <label htmlFor = 'pickUp' className = 'radio-labels'>Pick up</label>

            <input type = 'radio' name = 'delivery' className = 'delivery' id = 'shipping' value = 'shipping'></input>
            <label htmlFor = 'shipping' className = 'radio-labels'>Shipping</label>
        </fieldset>

        <fieldset id = 'payment-section' className = 'payment-and-delivery'>
            <legend className = 'legend-labels'>PAYMENT</legend>

            <input type='radio' name = 'payment' className = 'payment' id = 'cash' value = 'cash' required></input>
            <label htmlFor = 'cash' className = 'radio-labels'>Cash</label>

            <input type = 'radio' name = 'payment' className = 'payment' id = 'card' value = 'card'></input>
            <label htmlFor = 'card' className = 'radio-labels'>Card</label>

            <input type = 'radio' name = 'payment' className = 'payment' id = 'paypal' value = 'paypal'></input>
            <label htmlFor = 'paypal' className = 'radio-labels'>PayPal</label>

            <input type = 'radio' name = 'payment' className = 'payment' id = 'check' value = 'check'></input>
            <label htmlFor = 'check' className = 'radio-labels'>Check</label>

        </fieldset>
    </section>
    </fieldset>

    <button id = 'form-cancel' className = 'form-buttons'  onClick={()=>{
        closeForms('order')
        cancel()
        }}>Cancel</button>

    <button id = 'form-submit' type = 'submit' className = 'form-buttons' value = 'submit'
    onClick={orderFormSubmit}>Submit</button>
 
    </form>
  )
}//end of order form



export { OrderForm }