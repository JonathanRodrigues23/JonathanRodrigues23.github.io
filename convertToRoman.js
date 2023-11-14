function convertToRoman(num) {
    const numberArr = num.toString().split('').reverse().map(Number)
    const romanArr = []

    for(let i = 0; i < numberArr.length; i++){
        switch (numberArr[i]) {
            case 0:
                break;
            case 1: 
                if(i == 0) romanArr.push("I")
                else if(i == 1) romanArr.push("X")
                else if(i == 2) romanArr.push("C")
                else if(i == 3) romanArr.push("M")
                break;
            case 2:
                if(i == 0) romanArr.push("II")
                else if(i == 1) romanArr.push("XX")
                else if(i == 2) romanArr.push("CC")
                else if(i == 3) romanArr.push("MM")
                break;
            case 3:
                if(i == 0) romanArr.push("III")
                else if(i == 1) romanArr.push("XXX")
                else if(i == 2) romanArr.push("CCC")
                else if(i == 3) romanArr.push("MMM")
                break;
            case 4:
                if(i == 0) romanArr.push("IV")
                else if(i == 1) romanArr.push("XL")
                else if(i == 2) romanArr.push("CD")
                break;
            case 5:
                if(i == 0) romanArr.push("V")
                else if(i == 1) romanArr.push("L")
                else if(i == 2) romanArr.push("D")
                break;
            case 6:
                if(i == 0) romanArr.push("VI")
                else if(i == 1) romanArr.push("LX")
                else if(i == 2) romanArr.push("DC")
                break;
            case 7:
                if(i == 0) romanArr.push("VII")
                else if(i == 1) romanArr.push("LXX")
                else if(i == 2) romanArr.push("DCC")
                break;
            case 8:
                if(i == 0) romanArr.push("VIII")
                else if(i == 1) romanArr.push("LXXX")
                else if(i == 2) romanArr.push("DCCC")
                break;
            case 9:
                if(i == 0) romanArr.push("IX")
                else if(i == 1) romanArr.push("XC")
                else if(i == 2) romanArr.push("CM")
                break;
        }
    }
    
    return romanArr.reverse().join("")
}

