//javascript execution context
//  whenever you give code to js ths will always generate and that is: global execution context 
// and under [THIS] this global execution context will be stored 
//    in browser the value for global execution context will be window
// there are three execution context ::
//global EC
//Function EC
//Eval EC

//here comes the javsciprt code run development::
// 1> memory creation phase
// 2> execution phase

// let val1 =10
// let val2 = 20
// function addnum(num1,num2){
//     let total = num1+num2
//     return total


// }
// let reuslt1 = addnum(val1, val2)
// let result2 = addnum(10,2)

//  1>firstly the code runs with  GLOBAL EXECUTION and it is located in THIS




//  2>Memory executon phase : in this all the variables are collected and stored
let val1 =10
let val2 = 20
function addnum(num1,num2){
    let total = num1+num2
    return total


}
let reuslt1 = addnum(val1, val2)
let result2 = addnum(10,2)

// firstly it takes val1 and val2 and put undefined value in val1 and val2 and in addnum it puts the value deifniton as we just define the underlying operation inside the addnum function
// AND THEN AGAIN IN RESULT1 AND RESULT2 IT PUTS THE VLUE UNDEFINED IN THESE



//  3> EXECUTION PHASE
// assign value 10 and  to variable val1 and val2 

// and now when addnum function comes there will be a creation of NEW EXECUTION BOX in which a (new variable environment and execution thread ) WILL BE CREATED 

//each time you encounter a function there will be creation of memory phase and execution phase for addnum fucntion:
// MEMORY PHASE
// val1 - undefined 
// val2 - undefined
//total - undefined

//EXECUTION PHASE
//num1 -10
//num2 - 5
//total - 15
// and then in our function we are returning back our variable total 
// so it will be returned to globl execution 

//IMPORTANT : this execution sandbox will be deleted automatically 
// and once the sandbox deleted we return back t our execution phase of function addnum with value 15 



