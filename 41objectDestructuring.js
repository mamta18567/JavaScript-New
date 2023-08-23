const dost = {
    herName : "Ishita",
    hobby : "mujhe problem se bahar nikalana hehe",
    dosti : "pakki",
    age : 22
}

// const dostName = dost.herName;
// const hobby = dost.hobby;
// console.log(dostName, hobby);

// const {herName,hobby,...restprops}=dost; //object destructuring
// console.log(herName,hobby,restprops);

// if we want to change the name of properties, then we have to assign one name to each property in order to acess it from the variable name and we can do it like as follows - 

const {herName:var1,hobby:var2,...restprops}=dost; //object destructuring
console.log(var1);
console.log(var2);
console.log(restprops);