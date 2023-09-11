let obj1 = {
    name : "chinnu",
    country: "canada"
}
let obj2 = {
    name : "noori",
    country: "us"
}
let obj3 = {
    name : "tamum",
    country: "uk"
}

function printnameAndcountry(greet , x){
    // console.log(this);
    console.log(`Name: ${this.name} and Country: ${this.country} and greeting: ${greet} and ${x}`);
}
printnameAndcountry.call(obj1 , "gud mrng" , "gfghjh");
printnameAndcountry.call(obj2 , "gud ngt" , "tftdresdd");
printnameAndcountry.call(obj3 , "bye" , "fdrsdf");