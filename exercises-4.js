function dataHandling2(arrInput){
    var removed = arrInput.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
    var removed2 = arrInput.splice(4,1,'Pria','SMA Internasional Metro')
    console.log(`["${arrInput[0]}", "${arrInput[1]}", "${arrInput[2]}", "${arrInput[3]}", "${arrInput[4]}", "${arrInput[5]}"]`);

    var arrInputSplit = arrInput[3].split("/");
    console.log(numberToMonth(arrInputSplit[1]));

    var arrInputSplitCopy = [...arrInputSplit];
    var arrInputSplitSort = arrInputSplitCopy.sort(function(a,b){return b-a});
    console.log(arrInputSplitSort);

    var arrInputSplitJoin = arrInputSplit.join("-");
    console.log(arrInputSplitJoin);

    console.log(arrInput[1].slice(0,15))
}

function numberToMonth(numberInput){
    switch(numberInput){
        case '01':
            return 'Januari';
        case '02':
            return 'Februari';
        case '03':
            return 'Maret';
        case '04':
            return 'April';
        case '05':
            return 'Mei';
        case '06':
            return 'Juni';
        case '07':
            return 'Juli';
        case '08':
            return 'Agustus';
        case '09':
            return 'September';
        case '10':
            return 'Oktober';
        case '11':
            return 'November';
        case '12':
            return 'Desember';
    }
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);