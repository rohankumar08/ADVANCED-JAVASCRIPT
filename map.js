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
//  const person={
//     firstName:'john',
//     lastName:'Doe',
//     age:50
//  };
//  //destructuring:-it doesn't change original copy

//  let{firstName,lastName,country="INDIA"}=person;  //order doen't matter  // country is a default value
//  console.log(firstName);
//  console.log(lastName);
//  console.log(country);

//  //  allias name creation
//  let{lastName : name}=person;
//  console.log(name);

//  let name="Gurukultheschool";
//  let[a1,a2,a3,a4,a5]=name;
//  console.log(a1);

// const fruits=["Banana","Oranges","Apple","Mangoes"];
// // let[fruit1,fruit2]=fruits;
// // console.log(fruit1);
// // console.log(fruit2);
// let{[0]:fruit1,[3]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);

//**************************Rest********************************** */
// const number=[1,2,3,4,5,6,7];
// const[a,b,...Rest]=number;
// console.log(a);
// console.log(b);
// console.log(Rest);

// let firstName="Rohan";
// let lastName="Kumar";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);
// console.log(lastName);

//*****************************js exponentiation********************** */
// let x=5;
// console.log(x**2);
// console.log(Math.pow(x,2));// library
// console.log(x**=2);  //x=25


//******************js Array includes***************** */
// const fruits=["Banana","Oranges","Apple","Mangoes"];
// console.log(fruits.includes("Mangoes"));
// console.log(fruits.includes("Banana",3)); // here 3 is starting postipn of searching //false


//***************TRAILING COMMA*************************** ************************/
// const arr=["one","Two","Three",,];
// console.log(arr.length);
// console.log(arr);

// const person={
//    firstName:"ROhan",
//    lastName:"Kumar",
//    age:20,
// }
// we cant create sparse onbect it is error(syntax error)
// const person={
//    firstName:"ROhan",
//    lastName:"Kumar",
//      ,
//    age:20,
// }
