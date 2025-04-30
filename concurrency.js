// Callback
// it is just a function that take  another function as an argument

// function doSomething(callback){
//     callback();
// }
// function sayhi(){
//     console.log("Hi!");
// }
// doSomething(sayhi);

// function judge(grade){
//     switch(true){
//         case grade=="A":
//             console.log("You got",grade,":amazing");
//             break;
//             case grade=="B":
//             console.log("You got",grade,":amazing");
//             break;
//             case grade=="C":
//             console.log("You got",grade,":amazing");
//             break;
//             case grade=="C":
//             console.log("You got",grade,":amazing");
//             break;
//             case grade=="D":
//             console.log("You got",grade,":amazing");
//             break;
//             default:
//                 console.log("AN","!WHat");
//     }
// }
// function getgrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             greade="A";
//             break;
//             case score>=80:
//                 greade="B";
//                 break;
//                 case score>=70:
//                     greade="C";
//                     break; 
//                     case score>=60:
//                         greade="D";
//                         break;
//                     default:
//                         grade="f"; 
//     }
//     callback(grade);
// }
// getgrade(85,judge);

// setInterval(encourage,500);
// function encourage(){
//     console.log("You are doing great,keep going");
// }

//+++++++++++++++++++++++++++++PROMISES***************************************
// this function has two parameter resolVE AND REJECT
// let promise=new Promise(function(resolVE,REJECT){
//     let x=120;
//     if(x>10) resolVE(x);
//     else REJECT("Two low");
// });
// promise.then(
//     function(value){
//         console.log("Success",value);
//     },
//     function(error){
//         console.log("Error",error);
//     }
// );
 



//Arrow

// const promise=new Promise((resolve,reject)=>{
//     reject("SUccess!");
// }).then(value=>{
//     console.log(value);
//     return "WE";
// }).then(value=>{
//     console.log(value);
//     return "can";
// }).then(value=>{
//     console.log(value);
//     return "chain";
// }).then(value=>{
//     console.log(value);
//     return "promises";
// }).then(value=>{
//     console.log(value);
   
// }).catch(value=>{
//     console.log(value);
// })


//*****************************ASYNC  and AWAIT************************************* */



// function saySomething(x){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("SOmething"+x);
//         },5000)
//     });
// }

// async function talk(x){
//     const words=await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

// ******************************Event Loop**********************************************
// js is single threaded language

// call stack and callback queue

// console.log("hi there");
// add(4,5);
// function add(x,y){
//     return x+y;
// }


// console.log("hi there");
// setTimeout(()=>console.log("sorry i'm late"),1000);
// console.group(add(4,5));
// function add(x,y){
//     return x+y;
// }

console.log("hi there");
setTimeout(()=>console.log("sorry i'm late"),0); // answer remain same
console.group(add(4,5));
function add(x,y){
       return x+y;
     }