function pasanganTerbesar(num) {
    var numString = num.toString();
    if(numString.length>=2)
    {
        var tempMax = parseInt(numString[0]+numString[1])
        for(let i=0; i<numString.length-2; i++)
        {
            if( tempMax < parseInt(numString[i+1]+numString[i+2]))
            {
                tempMax = parseInt(numString[i+1]+numString[i+2]);
            }
        }
        return tempMax;
    }
    else console.log('Angka tidak dapat dijadikan pasangan')
}
  
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99