const user = {
    _email:"afiya",
    _password: "by",

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }

}

const tea = Object.create(user)
console.log(tea._email);
    
//getter setter using object 