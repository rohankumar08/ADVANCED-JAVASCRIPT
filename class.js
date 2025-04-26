// // this development reduce complexity of application
// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;  // scope of this.prop1 is universal;(classvariable)
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);
// //this leyword refer to the object it belong to,so it is the first property of instance of ClassName

// class Dog{
//     constructure(dogName,weight,color,breed){
//         this.dogname=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript",2.4,"brown","chihuahua");
// console.log(dog.dogname,"is a",dog.breed,"and weight",dog.weight,"KG");

//classes
// first letter should be capital
// class Person{
//     constructor(Firstname,Lastname){
//         this.Firstname=Firstname;
//         this.Lastname=Lastname;
//     }
// }
// let p=new Person("Maaike","van putten");
// console.log("hi",p.Firstname);
// class Person{
// constructor(Firstname,Lastname="Doe"){
//     this.Firstname=Firstname;
//     this.Lastname=Lastname
// }
// }
// let p=new Person(Person.Firstname,Person.Lastname);
// console.log("hi",p.Lastname);

//Methods
// //we dont use function keyword
// class Person{
//     constructor(Firstname,Lastname="Doe"){
//         this.Firstname=Firstname;
//         this.Lastname=Lastname
//     }
//     greet(){
//         console.log("hi there i am ",this.Firstname);
//     }
//     complement(name,object){
//     return "This's a wonderful"+object+","+name;
// }

//     }
    
//     let p=new Person("Rohan","kumar");
//     p.greet();
    
//     let complement=p.complement("harry","hat");
//     console.log(complement);
    

// PROPERTIES

// class Person{
//         constructor(Firstname,Lastname="Doe"){
//             this.Firstname=Firstname;
//             this.Lastname=Lastname
//         }
//     }

    // class person{
    //     #firstName;
    //     #lastName;
    //     constructor(Firstname,Lastname){
    //         this.#firstName=Firstname;
    //         this.#lastName=Lastname
    //     }
    // }
    // let p=new person("Rohan","Kumar");
    // console.log(p.Firstname);

    // class person{
    //     #firstName;
    //     #lastName;
    //     constructor(Firstname,Lastname){
    //        if(Firstname.startsWith("M")) this.#firstName=Firstname;
    //        else this.#firstName="M"+Firstname;
    //        this.#lastName=Lastname;
    //     }
    // }
    // let p=new person("Rohan","Kumar");
    // console.log(p.Firstname);


    //***********************GETTER AND SETTER*************************************** */

//     class person{
//         #firstName;
//         #lastName;
//         constructor(Firstname,Lastname){
//         this.#firstName=Firstname;
//         this.#lastName=Lastname;
        
//     }
//     get Firstname(){
//         return this.#firstName;
//     }
//     set Firstname(Firstname){
//         this.#firstName=Firstname;
//     }
//     get Lastname(){
//         return this.#lastName;
//     }
//     set Lastname(Lastname){
//         this.#lastName=lastName;
//     }
// }
//     let p=new person("Rohan","Kumar");
//     console.log(p.Firstname="Bittu");

//*****************INHERITANCE********************************************************
// class Vechicle{
//     constructor(color,currentSpeed ,maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;   
//     }
//     move(){
//         console.log("moving at",this.currentSpeed); 
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class MotorCycle extends Vechicle{
//     constructor(color,currentSpeed ,maxSpeed,fuel){
//         super(color,currentSpeed ,maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel");
//     }
// }
// let motor = new MotorCycle("Red",100,200,"Petrol");
// console.log(motor.color);
// console.log(motor.fuel);
// motor.accelerate(50);   
// motor.move();

//***************PROTOTYPE*************************************************** */

// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hi,There!!");
//     }
// }
// Person.prototype.getFullName = function(){ 
//     return this.firstname+" "+this.lastname;
// };
// Person.prototype.favColor = "Blue";
// let p = new Person("Rohan","kumar");
// console.log(p.getFullName());
// console.log(p.favColor); 
// console.log(p.greet());




