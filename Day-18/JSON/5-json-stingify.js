let x = {
    "name":"chinnu",
    "city":"rjy",
    "married":true,
    "number":[10,20,30],
    "obj1": {
        
        "name":"chinnu",
        "city":"rjy",
        "married":true,
        "number":[10,20,30],
        "obj": {
            "name":"chinnu",
            "city":"rjy",
            "married":true,
            "number":[10,20,30],
            "obj": {
                "name":"chinnu",
                "city":"rjy",
                "married":true,
                "number":[10,20,30]
            },
            
        },
        
    },
};
console.log(x);
let y = JSON.stringify(x, null, 2);
console.log(y);