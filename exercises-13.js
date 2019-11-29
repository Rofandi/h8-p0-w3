function targetTerdekat(arr) {
    var min = arr.length;
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==='o')
        {
            var oLocation = i;
        }
    }
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==='x')
        {
            if(min!=0 && min > Math.abs(i-oLocation))
            {
                min = Math.abs(i-oLocation);
            }
        }
    }
    if(min ===  arr.length)
    {
        return 0;
    }
    return min;
}
  
  // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2