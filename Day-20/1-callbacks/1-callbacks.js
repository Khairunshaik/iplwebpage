function f1(name , callback){
    console.log(name);
    callback();
}
f1("chinnu" , function f2(){
    console.log("inside f2 function");
});
