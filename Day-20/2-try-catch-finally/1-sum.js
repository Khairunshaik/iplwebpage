function sum(a,b){
    try{
        if(typeof a == "number" && typeof b == "number"){
            console.log(a+b);
        }
        else{
            throw new Error("please enter number only");
        }
    }catch(error){
        console.log(error.message);
    }
    finally{
        console.log("successfully completed");
    }
}

sum(10 , 20);