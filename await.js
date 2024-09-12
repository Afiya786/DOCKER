const fetchuserData = new Promise(function(resolve,reject){
  setTimeout(() =>{
    const data = {username :"maktub", password:"football"};
    
    reject(data.password);
  }, 2000);
});

// Now, we can use the async/await syntax to work with promises more easily.

async function getUserData() {
    try {
        console.log("fetching user data");
        const user = await fetchuserData;
        console.log("user data", user);
    } catch (error) {
        console.error("Error", error);
    }

}

getUserData();
console.log("request in progress");