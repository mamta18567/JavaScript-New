const app = () =>{
    const myfunc = () =>{
        console.log("Hello from myfunc")
    }
    const addNo = (num1, num2) =>{
        console.log(num1+num2);
    }
    const multiply=(num1,num2)=>{
        console.log(num1 * num2);
    }
    console.log("Inside func app");
    myfunc();
    multiply(4,5)
    addNo(4,5);
}
app();