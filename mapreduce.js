//  const myNums =[1,2,3,4,5,6,7]
//  const newnums = myNums.filter((num) => {
//      return num > 4
//  })

//  console.log(newnums)

//-------FILTER FUNCTION ------//

//-----MAP FUNCTION ----------//


const numbers =[1,2,3,4,5,6,7,8]

// const newnums = numbers.map( (num) => { return num + 10})
// console.log(newnums); 

// const newnums = numbers 
//                   .map((nums) => nums * 10)
//                   .map( (nums) => nums +1)
//                   .filter((nums) => nums >= 40)

//                   console.log(newnums)



//-------REDUCE FUNCTION---//

const total = numbers.reduce(function (acc,curval) {
    console.log(acc,curval);
    return acc + curval
}, 0)



// const total = numbers.reduce ( (acc,curval) => acc + curval, 0)

// console.log(total)


 