import $ from 'jquery';
import { itemList } from '../Items';

// var itemList
// function getData(data){
//     itemList = data
// }

// fetch("../clothingItems.json").then((res)=> getData(res.json()))

var p1 = '#pic1', p2 = '#pic2', p3 = '#pic3', p4 = '#pic4'
var onView = 'p2'


var indexerArr = [Math.floor(Math.random() * itemList.length)]
// generate elements for indexerArray
for(let i = 0; i < 3; i++){
    let index = Math.floor(Math.random() * itemList.length)

    if(indexerArr.indexOf(index) === -1){
        indexerArr.push(index)
    }//end of if 

    else{
        while(indexerArr.indexOf(index) !== -1){
            index = Math.floor(Math.random() * itemList.length)
        }
        indexerArr.push(index)
    }
}//end of 4 loop

//done  generating indexer array elments

function indexerSet(inde){
let index = Math.floor(Math.random() * itemList.length)    
let pos = indexerArr.indexOf(inde)

if(indexerArr.indexOf(index) === -1){
    indexerArr[pos] = index
}//end of if

else{
    while(indexerArr.indexOf(index) !== -1){
        index = Math.floor(Math.random() * itemList.length)
    }//end of while

    indexerArr[pos] = index
}

return index
}//end of indexer set

var indexer1 = indexerArr[0], indexer2 = indexerArr[1], indexer3 = indexerArr[2], indexer4 = indexerArr[3]

function changePicture(){
    if(onView === 'p1'){
        // change indexer3
 indexer3 = indexerSet(indexer3)

    let puase = setTimeout(()=>{
        $(p3).children().attr("src", itemList[indexer3].picUrl)
        clearTimeout(puase)
    }, 990)
    
    }//end of if

    else if(onView === 'p2'){
        //change 4

    indexer4 = indexerSet(indexer4)

    let puase = setTimeout(()=>{
        $(p4).children().attr("src", itemList[indexer4].picUrl)
        clearTimeout(puase)
    }, 990)

    }//end of else if

    else if(onView === 'p3'){
        //change 1
       indexer1 = indexerSet(indexer1)

    let puase = setTimeout(()=>{
        $(p1).children().attr("src", itemList[indexer1].picUrl)
        clearTimeout(puase)
    }, 990)
    }//end of else if

    else if(onView === 'p4'){
        //change 2

       indexer2 = indexerSet(indexer2)
    
        let puase = setTimeout(()=>{
            $(p2).children().attr("src", itemList[indexer2].picUrl)
            clearTimeout(puase)
        }, 990)

    }//end of else if
 
}//end of change pic function

function slide(){


    if(onView === 'p1'){
//hidde p4 open p3
        $(p4).css({
            transform: 'translateX(-337%) scale(.1)',
            zIndex: '-1'
        })

        $(p1).css({
            transform: 'translateX(0) scale(1)'
        })

        $(p2).css({
            transform: 'translateX(40%) scale(1.5)'
        })

        $(p3).css({
            visibility: 'visible',
            zIndex: '0',
            transform: 'translateX(120%) scale(1)'
        })

        let pause = setTimeout(()=>{
            $(p4).css({
                visibility: 'hidden'
            })
            clearTimeout(pause)
        }, 20)//visibility

        let puase1 = setTimeout(()=>{

            $(p4).css({
                transform: 'translatex(9%) scale(.1)',
                zIndex: '-1'
            })
            clearInterval(puase1)
        }, 2700)//end of motion

        onView = 'p2'
    }//end of if

    else if(onView === 'p2'){
//hide p1 open p4
        $(p1).css({
            transform: 'scale(.1)'
        })

        $(p2).css({
            transform: 'translateX(-113%) scale(1)'
        })

        $(p3).css({
            transform: 'translateX(-52%) scale(1.5)',
        })

        $(p4).css({
            transform: 'translateX(9%) scale(1)',
            zIndex: '0',
            visibility: 'visible'
        })

        let pause = setTimeout(()=>{
            $(p1).css({
                visibility: 'hidden'
            })

            clearTimeout(pause)
        }, 20)//set visibility

        let pause1 = setTimeout(()=>{
            $(p1).css({
                zIndex: '-1',
                transform: 'translateX(333%) scale(.1)'
            })
            clearTimeout(pause1)
        }, 2700)//end of motion

        onView = 'p3'
    }//end of else if

    else if(onView === 'p3'){
//hide p2 open  p1 
        $(p1).css({
            visibility: 'visible',
            zIndex: '0',
            transform: 'translateX(333%) scale(1)'
        })
        $(p2).css({
            transform: 'translateX(-113%) scale(.1)'
        })

        $(p3).css({
            transform: 'translateX(-224%) scale(1)'
        })

        $(p4).css({
            transform: 'translateX(-162%) scale(1.5)'
        })

        let puase = setTimeout(()=>{
            $(p2).css({
                visibility: 'hidden'
            })

            clearTimeout(puase)
        }, 20)//visibility 

        let pause1 = setTimeout(()=>{
            $(p2).css({
                zIndex: '-1',
                transform: 'translateX(222%) scale(.1)'
            })

            clearTimeout(pause1)
        }, 2700)//end of motion

        onView = 'p4'
    }//end of else if

    else if(onView === 'p4'){
//hide p3 open p2     
        $(p3).css({
            transform: 'translateX(-224%) scale(.1)'
        })

        $(p4).css({
            transform: 'translateX(-337%) scale(1)'
        })

        $(p1).css({
            transform: 'translateX(170%) scale(1.5)'
        })

        $(p2).css({
            visibility: 'visible',
            zIndex: '0',
             transform: 'translateX(222%) scale(1)'
        })

        let puase = setTimeout(()=>{

            $(p3).css({
                visibility: 'hidden'
            })
            clearTimeout(puase)
        },20)//visibility

        let puase1 = setTimeout(()=>{

            $(p3).css({
                zIndex: '-1',
                transform: 'translateX(111%) scale(.1)'
            })
            clearTimeout(puase1)

        },2700)//end of motion

        onView = 'p1'
    }//end of else if

}//end of slide funt

export {slide, onView, indexer1, indexer2, indexer3, indexer4, changePicture }