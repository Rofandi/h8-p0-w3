function angkaPalindrome(num) {
    num++;
    while(palindrome(num)!==true)
    {
        num++;
    }
    return num;
}

function palindrome(numbers) {
    var numbersString = numbers.toString();
    for(let i=0; i<numbersString.length-1; i++)
    {
        let j = numbersString.length-i-1;
        if(numbersString[i]!==numbersString[j])
        {
            return false;
            break;
        }
    }
    return true;
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001