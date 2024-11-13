import React, { useEffect, useState } from "react"
import './confirmation.css'
import './pad-conformation-form.css'
import { closeForms, openForms, formDetails, confirm } from "./forms-functions"
import { store } from "../status/store"
import { unSubmitted } from "../status/actions"
import { useSelector } from "react-redux"

function ConfirmationForm(){
 var {testSubmit}= useSelector((state)=> state.formSubmit)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [delivery, setDelivery] = useState('')
    const [payment, setPayment] = useState('')
    const [orderId, setOrderId] = useState('')

    useEffect(()=>{

        setName(formDetails.name)
        setSurname(formDetails.surname)
        setEmail(formDetails.email)
        setAddress(formDetails.address)
        setPhone(formDetails.phone)
        setDelivery(formDetails.delivery)
        setPayment(formDetails.payment)
        setOrderId(formDetails.orderId)

    }, [store.getState().formSubmit.submitted])

    return(
        <>
    <form id = 'confirmation-form'>
<fieldset id = 'inner-border'>
    <legend id = 'main-title'>PLEASE CONFIRM IF BELOW INFORMATION IS CORRECT!</legend>

        <h6 id = 'order-id'>{orderId}</h6>
    <label className = 'customer-infor'>Name : <span className="value-infor">{name}</span></label>
    <label className = 'customer-infor'>Surame : <span className="value-infor">{surname}</span></label>
    <label className = 'customer-infor'>Email : <span className="value-infor">{email}</span></label>
    <label className = 'customer-infor'>Address : <span className="value-infor">{address}</span></label>
    <label className = 'customer-infor'>Phone : <span className="value-infor">{phone}</span></label>

    <label className = 'customer-infor'>Delivery : <span className="value-infor">{delivery}</span></label>
    <label className = 'customer-infor'>Payment : <span className="value-infor">{payment}</span></label>

</fieldset>

<button className = 'confirmation-buttons' onClick={()=>{
    closeForms('confirm')
    openForms('order')
    store.dispatch(unSubmitted())
}}>Back</button>
<button className = 'confirmation-buttons' onClick={confirm}>Confirm</button>
    </form>

    <dialog id = 'dialog'>
<p className = 'dialog-paragraph'>
Thank you so much for your recent purchase! We truly appreciate your support and trust in our products. 
</p>

        <p className = 'dialog-paragraph'>press <kbd>Esc</kbd> to exit</p>
    </dialog>
</>
    )
}//end of confirmation form

export { ConfirmationForm }