
const randomize = (done)=>{
    let numbers = []
    for (let i = 0; i < 10000; i++) {
      let low = 9848
      let high =928374747
      numbers.push(Math.floor(Math.random() * (high - low + 1)) + low)
    }
    console.log("this is invokied")
    return done(numbers)
}


const random = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
module.exports = {randomize,random}