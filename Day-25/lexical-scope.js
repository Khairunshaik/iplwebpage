let name = "chinnu";
function f1(){
    var name="tamum";
    function f2(){
        name="noori";
        console.log(name);
    }
    f2();
    console.log(name);
}
f1();
console.log(name);