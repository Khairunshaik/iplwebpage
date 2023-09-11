let name = "mouni";
function f1(){
  
    var country = "india";
    function f2(){
        console.log(name);
        var age= 1000;
        console.log(age);
        city="Delhi";
    }
    f2();
    console.log(country);
    console.log(city);
}
f1();
console.log(city);