const person1 = {
    name:"afiya",
    age:20,
    greetings: function(){
        console.log(`hello my name is ${this.name} and age is ${this.age}`);
    }

}

const person2 =Object.create(person1);
person2.name ="afu",
person2.age=24;

person1.greetings();