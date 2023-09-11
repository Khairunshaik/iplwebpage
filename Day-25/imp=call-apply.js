//! function borrowing

let obj = {
    name: "Chinnu",
    country: "india",
    test: function(){
        console.log("test");
    },
    print(){
        console.log(`Name: ${this.name} and Country: ${this.country}`);
    }
}
obj.print();
let obj1 = {
    name : "tamum",
    country: "uk"
};
obj.print.call(obj1);

//TODO : (obj1 OBJECT) is borrowing print function which is inside (obj OBJECT)