function dataHandling(arrInput){
    for(let i=0; i<arrInput.length; i++)
    {
        console.log(`Nomor ID: ${arrInput[i][0]}`)
        console.log(`Nama Lengkap: ${arrInput[i][1]}`)
        console.log(`TTL: ${arrInput[i][2]}`)
        console.log(`Hobi: ${arrInput[i][3]} \n`)
    }
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

dataHandling(input)