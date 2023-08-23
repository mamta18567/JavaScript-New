const array1 = [1,2,3,4];
const array2 = [5,6,7,8];

const newArray = [...array1,"/",..."mamta", ...array2];
console.log(newArray);

//spread operators in objects.
const obj1 = {
    key1 : "value1",
    key2 : "value2" //,
    // key1 : "value3"
}
console.log(obj1);

// Here value3 will override the value1 and we will get key1:"value3"

const obj2 = {
    key1 : "uniquekey",
    key3 : "value3",
    key4 : "value4"
}
console.log(obj2);

const newObj = {...obj1,...obj2};
console.log(newObj); // {key1: 'uniquekey', key2: 'value2', key3: 'value3', key4: 'value4'}

// If we change the order like given below value of second object will come- 
const newObj1 = {...obj2,...obj1, key5 : "key5"};
console.log(newObj1); // {key1: 'value1', key3: 'value3', key4: 'value4', key2: 'value2'}

// In case we have a string in an object and we use spread operator, it will convert the string into key value pair as follows: 

const strObj = {..."obj1"}
console.log(strObj) //{0: 'o', 1: 'b', 2: 'j', 3: '1'}


// In case of array inside object, it will spread the array as - 

const objectArray = {...["name1","name2"]};

console.log(objectArray)