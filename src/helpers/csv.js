const {countryCode} = require("./common")
function getRandomNum(length) {
    var randomNum = 
        (Math.pow(10,length).toString().slice(length-1) + 
        Math.floor((Math.random()*Math.pow(10,length))+1).toString()).slice(-length);
    return randomNum;
}

let numbers = []
const randomize = ()=>{
    for (let i = 0; i < 1000; i++) {
      numbers.push(getRandomNum(10))
    }
    return numbers;
}

const random = (code)=> randomize().map(num=>num.toString()).map(num=>{
    const {dial_code}  = countryCode(code)
    if(num.charAt(0) !== "0" ){
        num = num.substr(0,num.length-1)
        console.log("the stuff doesn't start with 0 ",)
        return `(${dial_code}) `+num
    }else if(num.charAt(0) === "0" && num.charAt(1) === "0"  ) {
        num = num.substr(1,2) + getRandomNum(1)
        return `${dial_code} ` + num
    }else{

        num = num.substr(1) + getRandomNum(1)
        console.log("the number correct", num)
        return `(${dial_code}) `+num
    }
    
})


module.exports = random