fetch('https://api.github.com/users/Afiya786')
.then(response => {
    if(!response.ok) {
        throw new Error('network probleam');
        
    }

    return response.json();
})

// .then(values => {
//     console.log(values);
// })
.catch(error =>{
    console.log("fetch error",error);
});