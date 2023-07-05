// sum of 1-100 //done
// pattern   //done
// fibonacci series //done
// primitive datatypes have no values or methods
// objects are mutable in javascript;
// mutable means that they are passed by refernce and not by value;

// console.log('Enter the number till what u ant the sum :');
// let name=10;
// let age=0;
// let arr=[]; // vector in c++;
// let obj={   // object in javascript quite usefull
//        name:'Kiran',
//        age:90,
//        email: 'kiranvasave'  

// }
// let obj2=new Object(); // new way of creating objects in javascipt (recommmend to use const for objects);
// obj2.pp='Plir';
// obj2.op='Kiran';
// console.log(obj2);
// obj.age=10;
// for(let i=0;i<=name;i++)
// {
//        arr.push(i);
// }
// console.log(arr);
// let arr=[];
// arr.push(0);
// arr.push(1);
// function fib(n) // fibonacci generator with javascript;
// {
//        if(n==0)
//        return 0;
//        if(n==1)
//        return 1;
//        return fib(n-1)+fib(n-2);
// }
// console.log(fib(6));

// *
// **
// ***
// ****
// *****

// function pat()
// {
//        for(let i=1;i<=5;i++)
//        {
//               let str='';
//               for(let j=1;j<=i;j++)
//               {
//                     str+='*';
//               }
//               console.log(str);
//        }

// }
// pat();

// u can create an array of objects

// let arr=[{name:'kiran',age:90},{name:'op',age:80},{op:89,ip:0}]; // not necessarily the same type of objects;
// console.log(arr[2]);

//   *
//  ***
// *****

// function pat(){
//        let p=1;
//        for(let i=3;i>=0;i--)
//        {
//               let str='';
//               for(let j=0;j<i;j++)
//               {
//                      str+=' ';
//               }
//               for(let j=0;j<p;j++)
//               {
//                      str+='*';
//               }
//               p+=2;
//               console.log(str);

//        }
// }
// pat(); 
// const print = () =>{
//     console.log("Hello WOrld");   // asynchronous behaviour of javascript
// }
// setTimeout(print,3*1000);
// let count=0;
// for(let i=0;i<10;i++)
// {
//     count++;
// }
// console.log(count);

// stopwatch
// count=1;
// const stopWatch = () =>{
//     console.clear();
//     console.log(count);
//     count++;
// }
// setInterval(stopWatch,1000); // this function calls the function stopwatch every 1 sec


// object

// const a = () =>{
//     console.log("kiran");
// }
// let harikat = {
//     name :a
// }
// console.log(harikat.name());

// sort in javascript;

// let p=new Promise((resolve,reject)=>{
//     let a=1+3;
//     if(a==2)
//     {
//         resolve('Success');
//     }else
//     {
//         reject('Failed');
//     }
// })

// p.then((message)=>{
//     console.log("This is the message " +message);
// }).catch((message)=>{
//     console.log("This is the message "+message);
// })

const fs= require('fs');
let contents;
 fs.readFile('a.txt','utf8',(err,data)=>{
  if(err)
  {
    console.error(err);
    return ;
  }
  contents=data;
  contents=contents.trim();
  let temp="";
  let arr=[];
  for(let i=0;i<contents.length;i++)
  {
    if(contents[i]!=" ")
    {
      temp+=contents[i];
    }else
    {
      if(temp!="")
      {
      arr.push(temp);
      }
      temp="";
    }
  }
  if(temp!="")
  {
    arr.push(temp);
  }
  let str="";
  for(let i=0;i<arr.length;i++)
  {
    str+=arr[i];
    str+=" ";
  }
  fs.writeFile('a.txt',str,(err)=>{
    if(err)
    {
      console.error(err);
    }
  })
});




  






// function print(){
//     console.log("kiran");
// }
// setTimeout(print,1*1000);  //aysnchronous way
// let count=0;
// for(let i=0;i<1000;i++)
// {
//     count++;
// }
// console.log(count);

