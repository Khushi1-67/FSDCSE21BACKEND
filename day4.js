//create one promise that will display user name and password
//using resolve and if data will be rejected its display error message 
new Promise (()=>{
     setTimeout(()=>{

    let err=true;
if (!err) {
    resolve ("user:CSE21,password:1410");

}
else {
    rejectc("ERROR...:data fail");
}
},2000 )
}).then().catch()