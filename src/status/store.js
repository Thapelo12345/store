import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { sumbmitted } from './actions';

const defualtyState = {navigate: "home"}
const HOME = 'HOME'
const ALL_ITEMS = 'ALL_ITEMS'
const WOMEN = 'WOMEN'
const MEN = 'MEN'
const ACCESSORIES = 'ACCESSORIES'

const headerReducer = (state = defualtyState, action )=>{
    switch(action.type){
        case HOME:
            return {navigate: 'home'}
            break

            case ALL_ITEMS:
            return {navigate: 'all_items'}
            break

            case WOMEN:
            return {navigate: 'women'}
            break

            case MEN:
            return {navigate: 'men'}
            break

            case ACCESSORIES:
            return {navigate: 'accessories'}
            break
           
            default:
            return state
            break

    }//end of switch
}//end of reducer

const priceReducer = (state = 0.00, action)=>{
    switch(action.type){
        case "addAmount":
            return +(state += action.payload).toFixed(2)

        case "subtractAmount":
            return +(state -= action.payload).toFixed(2)

        default:
            return state
    }//end of switch
}//end of price reducer

const itemCountReducer = (state = 0, action)=>{
    switch(action.type){
        case 'ADD':
            return state += 1
        case 'SUBTRACT':
            return state -= 1
        default:
            return state

    }//end of switch

}//end of item count reducer

const defaultSubmit = {submitted: false}

const formSubmitReducer = (state = defaultSubmit, action)=>{
  switch(action.type){
    case 'SUBMITTED':
        return {sumbmitted: true}

    case 'NOTSUBMITTED':
        return {submitted: false}

    default:
        return state    
  }
}//end of fromsubmit Reducer

const allReduces = combineReducers({
    navigator : headerReducer,
    itemCount : itemCountReducer,
    price: priceReducer,
    formSubmit: formSubmitReducer
})

const store = createStore(allReduces)
// const store = createStore(headerReducer )
// window.store = store

export { store }
