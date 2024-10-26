var userArr = []
function addAnItem(ob){

    userArr.length === 0 ? userArr.unshift(ob) : userArr.push(ob)
    userArr.sort()
}
function emptyArray(){
    while(userArr.length !== 0){userArr.pop()}
}//end of empty array funct

export { userArr, addAnItem, emptyArray }

