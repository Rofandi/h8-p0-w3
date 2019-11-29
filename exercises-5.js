function palindrome(kata) {
    for(let i=0; i<kata.length-1; i++)
    {
        let j = kata.length-i-1;
        if(kata[i]!==kata[j])
        {
            return false;
            break;
        }
    }
    return true;
}
  
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false