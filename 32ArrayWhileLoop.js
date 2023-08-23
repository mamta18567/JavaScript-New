const fruits = ["Apple","Mango","Banana","Kiwi","Chickoo","Orange"];
let i=0;
const newfruits =[];
while(i<fruits.length){
   newfruits.push(fruits[i].toUpperCase());
    i++;
}
console.log(newfruits);