// create a map
//  const fruits=new Map([
//     ["apple",500],
//     ["banana",3000],
//     ["orange",2000]
//  ]);
//  console.log(fruits);

//  using set method

//  const fruits=new Map();
//  fruits.set('apple',5000);
//  fruits.set('banana',30000);
//  fruits.set('orange',2000);
//  console.log(fruits.get("apple"));  // print using get
// fruits.set("apple",1000);  // updated
//  console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits.size);
// fruits.delete("apple");
// console.log(fruits);
// // fruits.clear();
// console.log(fruits);
 
// console.log(fruits.has('apple'));

// let text="";
// fruits.forEach(function(value,key){
//     text+=key+='='+value;
// })
// console.log(text);
 

// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);

// let text="";
// for(const x of fruits.keys()){
//     text+=x+' ';
// }
// console.log(text);

// let text="";
// for(const x of fruits.values()){
//     text+=x+' ';
// }
// console.log(text);

// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

// const apple={name:'Apple'};
// const banana={name:'Banana'};
// const orange={name:'Orange'};

// const fruits=new Map();
// fruits.set(apple,500);
// fruits.set(banana,300);
// fruits.set(orange,200);

// console.log(fruits.get("apple")); //undefined


//***********************DESTRUCTURING***************************** */
 const person={
    firstName:'john',
    lastName:'Doe',
    age:50
 };
 //destructuring:-it doesn't change original copy

 let{firstName,lastName,country="INDIA"}=person;  //order doen't matter  // country is a default value
 console.log(firstName);
 console.log(lastName);
 console.log(country);

 //  allias name creation
 let{lastName : name}=person;
 console.log(name);