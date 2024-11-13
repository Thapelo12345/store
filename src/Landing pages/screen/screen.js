import React from 'react';
import { useEffect } from 'react';
import './screen.css';
import { slide, indexer1, indexer2, indexer3, indexer4, changePicture } from './screen-functions'
import { store } from '../../status/store';
import { itemList } from '../Items';

var timer;

var Pic1 = ()=>{
    return <div id = 'pic1' className = 'pic-container'>
<img className = 'screen-img' src = {itemList[indexer1].picUrl} alt = 'clothing image'></img>
<div className = 'infor'></div>

    </div>
}//end of pic 1

var Pic2 = ()=>{
    return <div id = 'pic2' className = 'pic-container'>
<img className = 'screen-img' src = {itemList[indexer2].picUrl} alt = 'clothing image'></img>
<div className = 'infor'></div>

    </div>
    }//end of pic 2

var Pic3 = ()=>{
    return <div id = 'pic3' className = 'pic-container'>
<img className = 'screen-img' src = {itemList[indexer3].picUrl} alt = 'clothing image'></img>
<div className = 'infor'></div>

    </div>
}//end of pic 3

var Pic4 = ()=>{
    return <div id = 'pic4' className = 'pic-container'>
<img className = 'screen-img' src = {itemList[indexer4].picUrl} alt = 'clothing image'></img>
<div className = 'infor'></div>
    </div>
}//end of pic 4


function Screen() {

 useEffect(()=>{

timer = setInterval(()=>{

if(store.getState().navigator.navigate === 'home'){

        {slide()}
        {changePicture()}
}

else{clearInterval(timer)}
           
    }, 6000)
    
 },[store.getState().useSelector])
    

return (
    <div id = 'screen'>
   <Pic1 />
   <Pic2 />
   <Pic3 />
   <Pic4 />
    </div>
);

}//end of screen func

export default Screen;