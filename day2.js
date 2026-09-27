//synchronus and asynchronus programming
//synchronus programming : code is executed line by line,on

//function hello(){
  //  console.log("Hello,World");
//}
//hello();
//console.log("This is synchronus programmming");

    // async programming
    // const hello =()=> {
    //     setTimeout(() => {
    //         console.log ("hello,world");
    //     },2000);
    //  console.log("this is asynchronus program");
    // }

//callback,promises, async/await
function add(n1,n2,callback){
    console.log(n1+n2);
    callback();
}
let a=2;
let b=10;
add (a,b,sayHi);
function sayHi(){
    console.log ("this is callback function");
}
function hello(){
    console.log ("hello, world!");
}

//create a function display (callback) that print "welcome to abes", then call callback which print learning "fsd"
function sayHi(){
    console.log ("welcome to abes");
}