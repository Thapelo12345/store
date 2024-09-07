
export const changeNavigator = (navg) =>{return {type: navg.toUpperCase()}}

export const addAmount = (currentValue)=>{return {type: 'addAmount', payload: currentValue}}//end of price add

export const subtractAmount = (currentValue)=>{return {type: 'subtractAmount',payload: currentValue}}//end of price subtract

export const add = ()=>{return {type: 'ADD'}}//end of item add

export const subtract = ()=>{return {type: "SUBTRACT"}}//end of item subtract

export const sumbmitted = ()=>{return {type: 'SUBMITTED'}} 

export const unSubmitted = ()=>{return {type: 'NOTSUBMITTED'}}