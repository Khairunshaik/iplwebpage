class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    parentMethod(){
        console.log("inside parent method")
    }
}
class Student extends Person{
    constructor(name,age,roll,branch,college){
        super(name,age);           //to call parent constructor
        this.roll = roll;
        this.branch = branch;
        this.college = college;
    }
    childMethod(){
        console.log("inside child method")
    }
}
const s1 = new Student("chinnu", 22 , 3 , "ECE" , "NRI");
console.log(s1);
s1.childMethod();
s1.parentMethod();