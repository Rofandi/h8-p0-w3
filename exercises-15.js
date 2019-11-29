function groupAnimals(animals) {
    animals.sort();
    var animalList = [];
    var animalTemp = [];
    for(let i=0; i<animals.length; i++)
    {
        if(animalTemp.length===0)
        {
            animalTemp.push(animals[i]);
        }
        else if(animals[i][0]===animalTemp[0][0])
        {
            animalTemp.push(animals[i]);
        }
        else
        {
            animalList.push(animalTemp);
            animalTemp=[animals[i]];
        }
    }
    if (animalTemp.length > 0) {
        animalList.push(animalTemp);
    }
    return animalList;
}
  
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]