// In this assignment, you will be creating a class named "Person" and then create your whole family from that class.



// Create "Person" class
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Extend Person class and create one class for each member of your family.
class Person {
  constructor (attr){
    this.name = attr.name;
    this.age = attr.age;
    this.hobby= attr.hobby
  }
  speak(){
    return `Hello, My name is ${this.name} and i'am age ${this.age} Years Old. I love ${this.hobby} `
  }
}
class Father extends Person{
  constructor(fatherAttr){
  super(fatherAttr)
  }
}

const father =  new Father({
  name : "ahmed",
  age : "69",
  hobby : "reading for kuran"
})
class Mother extends Person{
  constructor(motherAttr){
    super (motherAttr)
  }
}
const mother = new Mother({
  name : "Maryam",
  age: "56",
  hobby: "Teaching" 
})
class Brother extends Person{
  constructor(brotherAttr){
    super(brotherAttr)
  }
}
const brother = new Brother({
  name : "Abdirahman",
  age  : "27",
  hobby : "Playing Football"
})
class Sister extends Person{
  constructor(sisAttr){
    super(sisAttr)
  }
}
const  sister = new Sister({
  name : "Sara",
  age : "26",
  hobby : "Learning Healthy Science"
})
console.log(father.speak())
console.log(mother.speak())
console.log(brother.speak())
console.log(sister.speak())