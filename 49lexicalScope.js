const myvar = "Value1";
const myApp = () =>{
    function myfunc1(){
        const myvar1 = "Value2";
        console.log("Inside myfunc1")
    }
    const myfunc2 = function(){}
    const myfunc3 = () =>{}
    console.log(myvar)
    myfunc1();
}


myApp();
