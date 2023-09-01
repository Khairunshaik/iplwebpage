class Product {
    constructor(name , desp , price , company){
        this.name = name;
        this.desp = desp;
        this.price = price;
        this.company = company;
    }
    printProductName(){
        console.log(this.name);
    }
    printProductCompany(){
        return this.company;
    }
    printProductInfo(){
        console.log("Product Name ==>" , this.name);
        console.log("Product Desp ==>" , this.desp);
        console.log("Product  Price==>" , this.price);
        console.log("Product company ==>" , this.company);
    }
    printRandomMessage(greet){
        console.log("Happy" , greet);
    }
}
const Obj1 = new Product("Iphone", 70000 , "Black color dual camera" , "Apple");
const Obj2 = new Product("Poco x4 pro", 20000 , "Blue color quad camera" , "Realme");
// console.log(Obj1);
// console.log(Obj2);
// Obj1.printProductName(); //syntax- obj.methodname    -->prints product name 
// Obj2.printProductName();

// let com = Obj1.printProductCompany();
// let com1 = Obj2.printProductCompany();
// Obj1.printProductInfo();
// Obj2.printProductInfo();


Obj1.printRandomMessage("Ramzan");
Obj1.printRandomMessage("Bakrid");
Obj1.printRandomMessage("Muharram");