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

numbers = randomize().map(num=>num.toString()).map(num=>{
    console.log(num.charAt(0))
    if(num.charAt(0) !== "0" ){
        num = num.substr(0,num.length-1)
        return "0"+num
    }else if(num.charAt(0) === "0" && num.charAt(1) === "0"  ) {
        num = num.substr(1) + getRandomNum(1)
        return num
    }else{
        return num
    }
    
})


module.exports = numbers