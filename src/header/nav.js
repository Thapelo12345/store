import React from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import './header.css';
import { HomeIcon, MaleIcon, FemaleIcon, MaleAndFemaleIcon, AccessoriesIcon } from '../Icons/icons'
import { store } from '../status/store'
import { changeNavigator } from '../status/actions';
import { selectMenu } from './header-functions'


function NavBar(){
    
    const navig = useNavigate()

        return(
            <nav id = 'navBar'>
    <div id = 'bg'></div>
    
                <button id = 'home' className = "nav-button" onClick={()=>{
                    navig("/")
                    $('#bg').css({
                        left: '8%'
                    })
    
                    let crrId = '#' + store.getState().navigator.navigate
                    store.dispatch(changeNavigator('home'))
                    document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, steelblue, blue)')
                    {selectMenu(crrId)}
                }}>
                <span className = 'component-container'><HomeIcon /></span>
                <span className = 'text'>Home</span>
                </button>
    
                <button id = 'all_items' className = "nav-button" onClick={()=>{
                    navig("/view-all")
                    $('#bg').css({
                        left: '25.4%'
                    })
                    let crrId = '#' + store.getState().navigator.navigate
                    store.dispatch(changeNavigator('all_items'))
                    document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, rgb(177, 156,217), purple)')
                    {selectMenu(crrId)}
    
                }}>
                <span className = 'component-container'><MaleAndFemaleIcon /></span>
                <span className = 'text'>All</span>
                </button>
    
                <button id = 'women' className = "nav-button" onClick={()=>{
                    navig("/women")
                    $('#bg').css({
                        left: '42.2%'
                    })
                    let crrId = '#' + store.getState().navigator.navigate
                    store.dispatch(changeNavigator('women'))
                    document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, pink, #c11c84)')
                {selectMenu(crrId)}
                    
                }}>
                <span className = 'component-container'><FemaleIcon /></span>
                <span className = 'text'>Women</span>
                </button>
                
                <button id = 'men' className = "nav-button" onClick={()=>{
                    navig("/men")
                    $('#bg').css({
                        left: '59%'
                    })
                    let crrId = '#' + store.getState().navigator.navigate
                    store.dispatch(changeNavigator('men'))
                    document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, white, skyblue, steelblue)')
                {selectMenu(crrId)}
                
                }}>
                <span className = 'component-container'><MaleIcon /></span>
                <span className = 'text'>Men</span>
                </button>
    
                <button id = 'accessories' className = "nav-button" onClick={()=>{
                    navig("/accessories")
                    $('#bg').css({
                        left: '76%'
                    })
                    let crrId = '#' + store.getState().navigator.navigate
                    // console.log(crrId)
                    store.dispatch(changeNavigator('accessories'))
                    document.documentElement.style.setProperty('--nav-bg-img', 'linear-gradient(0deg, whitesmoke, orange, tan)')
                    {selectMenu(crrId)}
                    
                }}>
                <span className = 'component-container'><AccessoriesIcon /></span>
                <span className = 'text'>Accessories</span>
                </button>
    
            </nav>
        )
    }//end of nav component
    

    export { NavBar }