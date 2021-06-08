/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding When in the global scope, the value of “this” will be the window/console Object;
* 2. Implicit Binding is applied when you invoke a function in an Object using the dot notation.
* 3. Explicit Binding can be applied using call(), apply(), and bind().
* 4. New binding is applied when we create an object using Function Constructors.
* 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function city(name) {
    console.log(this.name)
  }
  
  const name = "London"
  
  city()
// Principle 2

// code example for Implicit Binding
const course = {
    name : "Web Development",
    time : "Part time",
    detail : function(){
        return `My Course Is ${this.name}, the Course Time is ${this.time}`
    }
}
console.log(course.detail())
// Principle 3

// code example for New Binding
 function Company (attr){
   this.name = attr.name;
   this.location = attr.location;
   this.work = attr.work;
 }
 const Dahabshiil = new Company({
     name  : 'Dahabshiil',
     location  : 'Around The World',
     work : 'Money Transfer'

 })
 console.log(Dahabshiil.name)
// Principle 4

// code example for Explicit Binding
function courses() {
    console.log(this.courseName)
  }
  const courseOne = {
    courseName : "HTML, CSS and JAVASCRIPT"
  }
  courses.call(courseOne)
  courses();