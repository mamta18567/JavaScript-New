function myfunction(a){
    function square(){
        console.log(a**2);
    }
    return square
}

const numberKaSquare = myfunction(3)
numberKaSquare()