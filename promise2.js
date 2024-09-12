const promiseReject = new Promise(function(resolve, reject){
    setTimeout(() => {
        reject("the task is not  completed"); // this message will be displayed as our task is successfully completed
    }, 1000);
});

promiseReject.then((message) =>{ //this tehn is directly connected to resolve that is why when you execute the resolve .then block will executed and not .catch
    console.log(message);
})

.catch((error) => {
    console.log(error);
});

