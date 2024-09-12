const promiseone = new Promise(function (resolve, reject){
    // this is the format to write a promise initialize promise just like object of a class and promise has two parameters i.e reslve and reject
    setTimeout(function() {
        console.log('async task is complete');
        resolve() //this will connect the resolve parameter and then
    }, 1000);
})



promiseone.then(function() {
    console.log("promise completed");
}) //.then has a direct connection with your resolve in the promise variable



//this is for displaying data---------------
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"afiya", emial:"afu@gmil.com"})

    },1000)

})

promiseThree.then(function(user){
    console.log(user)
})