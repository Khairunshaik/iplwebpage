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
printnameAndcountry.apply(obj1 , ["gud mrng" , "gfghjh"]);
printnameAndcountry.apply(obj2 , ["gud ngt" , "tftdresdd"]);
printnameAndcountry.apply(obj3 , ["bye" , "fdrsdf"]);