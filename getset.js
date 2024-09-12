class User {
  constructor(email,password){
    this.email=email;
    this.password=password;
  }



  get email(){
    return this._email.toUpperCase()
  }
  set email(value){
    this._email = value //we dont return in setter/

  }

  get password(){
    return `${this._password}hammad`
  }

  set password(value){
    this._password = value
  }
}




const sub = new User("@gmail", "afiya");
console.log(User);