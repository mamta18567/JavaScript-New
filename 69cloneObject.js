// cloning object using object.assign


// Normal way using spread operator
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {...obj1};

obj1.key3 = "value3";

console.log({"Obj1":obj1,
"Obj2":obj2})


// Object.assign

const obj3 = {
    Name : "mamta",
    age : 21
}

const obj4 = Object.assign({},obj3)

obj3.hobby = "Listening to music";

console.log({"Obj3":obj3,
"Obj4":obj4})


