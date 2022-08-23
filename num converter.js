
function numToWords(num) {
    let unitsCont = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let unittenCont = [
        "eleven", "twelve", "thirtheen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninetheen",
    ]
    let tensCont = [
        "ten", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninty"
    ]

    main = [];
    let count = 1;

    let n = num.toString().length;
    if (n === 1){
        return unitsCont[parseInt(num)];
    } 
    num = num.toString()
    num = num.split('');
    n = num.length;
    digit = (document.querySelector("#digit"));
    outputs = (document.querySelector("#words"))
    let str
    //e.g if number length is equal to 2
    if (n === 2) {
        
        if(parseInt(num[1]) === 0){
            return tensCont[num[0]-1];
        }
        else if(parseInt(num[0])==1 && parseInt(num[1]) !== 0) {
            return unittenCont[num[1] - 1];
        }
        else if(parseInt(num[0])> 1 ) {
            return tens[num[0] - 1] + "-"+ units[num[0]];
        }
    } else if (n === 3) {
        let str = unitsCont[parseInt(num[0])] + " hundred" 
         parseInt(num[1]) != 0 && parseInt(num[1]) == 1 
         ? str = str + " and " + unittenCont[parseInt(num[2] - 1)] 
         :parseInt(num[1]) == 0 && parseInt(num[2]) > 0 
         ? str = str + " and " + unitsCont[parseInt(num[2])] 
         : parseInt(num[1]) > 1
         ? str = str + " and " + tensCont[parseInt(num[1]) - 1] + ( parseInt(num[2]) != 0
            ? " " + unitsCont[parseInt(num[2])] : "")
         : ""

         return str;
    } else if (n === 4) {
        let str = unitsCont[parseInt(num[0])] + " thousand" 
         parseInt(num[1]) != 0 
         ? str = str + " " + unitsCont[parseInt(num[1])] + " hundred" + (
            parseInt(num[2]) === 1 && parseInt(num[3]) > 0 
            ? " and "+ unittenCont[parseInt(num[3])-1]
            : parseInt(num[3]) == 0 && parseInt(num[2]) > 0 
            ? " and "+ tensCont[parseInt(num[2]) - 1]
            : parseInt(num[2]) === 0 && parseInt(num[3]) > 0
            ? " and "+ unitsCont[parseInt(num[3])]
            :parseInt(num[2]) > 1 && parseInt(num[3])  > 0
            ? " and "+ tensCont[parseInt(num[2]) - 1] + " "+ unitsCont[parseInt(num[3])]
            : " "
         )
         :parseInt(num[1]) == 0 && parseInt(num[2]) > 0  
         ? (
            parseInt(num[2]) > 0 && parseInt(num[3]) === 0
            ? str = str + " and " + tensCont[parseInt(num[3])]
            : parseInt(num[2]) == 1 && parseInt(num[3]) > 0
            ? str = str + " and " + unittenCont[parseInt(num[3])]
            : parseInt(num[2]) > 1 && parseInt(num[3]) > 0 
            ? str = str + " and " + tensCont[parseInt(num[2])-1] + " " + unitsCont[parseInt(num[3])]
            : ""
         ) 
         :parseInt(num[1]) == 0 && parseInt(num[2]) === 0 && parseInt(num[3]) > 0
         ? str = str + " and " + unitsCont[parseInt(num[3])]
         : ""

        return str;
    } else if (n === 5) {
        let str = parseInt(num[0]) === 1 && parseInt(num[1]) > 0
            ? unittenCont[parseInt(num[1])-1] + " thousand"
            : parseInt(num[0]) >= 1 && parseInt(num[1]) === 0
            ? tensCont[parseInt(num[0])-1] + " thousand"
            : tensCont[parseInt(num[0])-1] + unitsCont[num[1]] + " thousand"
        
        parseInt(num[2]) != 0 
         ? str = str + " " + unitsCont[parseInt(num[2])] + " hundred" + (
            parseInt(num[3]) === 1 && parseInt(num[4]) > 0 
            ? " and "+ unittenCont[parseInt(num[4])-1]
            : parseInt(num[4]) == 0 && parseInt(num[3]) > 0 
            ? " and "+ tensCont[parseInt(num[3]) - 1]
            : parseInt(num[3]) === 0 && parseInt(num[4]) > 0
            ? " and "+ unitsCont[parseInt(num[4])]
            :parseInt(num[3]) > 1 && parseInt(num[4])  > 0
            ? " and "+ tensCont[parseInt(num[3]) - 1] + " "+ unitsCont[parseInt(num[4])]
            : " "
         )
         :parseInt(num[2]) == 0 && parseInt(num[3]) > 0  
         ? (
            parseInt(num[3]) > 0 && parseInt(num[4]) === 0
            ? str = str + " and " + tensCont[parseInt(num[4])]
            : parseInt(num[3]) == 1 && parseInt(num[4]) > 0
            ? str = str + " and " + unittenCont[parseInt(num[4])-1]
            : parseInt(num[3]) > 1 && parseInt(num[4]) > 0 
            ? str = str + " and " + tensCont[parseInt(num[3])-1] + " " + unitsCont[parseInt(num[4])]
            : ""
         ) 
         :parseInt(num[2]) == 0 && parseInt(num[3]) === 0 && parseInt(num[4]) > 0
         ? str = str + " and " + unitsCont[parseInt(num[4])]
         : ""

         return str;
    }
    else if(n ===6){
        let str = parseInt(num[0])    
    }

} 
console.log(numToWords(3452));
