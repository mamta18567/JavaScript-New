function hello(x){
    const a = "Var A";
    const b = "Var B";
    return function(){
        console.log(a,b,x);
    }
}
const ans = hello(2);
ans();