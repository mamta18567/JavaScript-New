function func(){
 console.log("Inside Func");   
}

function newfunc(func){
    func();
}

newfunc(func);