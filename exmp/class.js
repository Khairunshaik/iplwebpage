class Car{

    //properties
    constructor(color , maximumspeed , price) {
        this.color = color;
        this.maximumspeed = maximumspeed;
        this.price = price;
    }

    //methods
    printcarInfo(){
        console.log("print info called---->" , this);
    }
}
let alto = new Car("Red" , "100" , "1000000");
let x1 = new Car("Blue" , "150" , "5000000");
let audi = new Car("Black" , "250" , "89000000");
// console.log(alto);
// console.log(x1);
// console.log(audi);

alto.printcarInfo();