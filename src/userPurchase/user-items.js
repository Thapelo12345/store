var userArr = []
function addAnItem(ob){
    userArr.length === 0 ? userArr.unshift(ob) : userArr.push(ob)

    userArr.sort()
}

export { userArr, addAnItem }

