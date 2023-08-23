const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";


// const obj ={
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }

const obj = {
    key1 : value1,
    key2 : value2
}
console.log(obj); // {key1: 'myvalue1', key2: 'myvalue2'}

// but if we want value of key1 and key2 we must use brackets with it

const obj1 = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj1); // {objkey1: 'myvalue1', objkey2: 'myvalue2'}

// Another way
const object = {};
object[key1] = value1;
object[key2] = value2;
console.log(object);