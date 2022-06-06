let n = parseInt(prompt("Enter number"));
let counter=0;


for(let i=1;i<=1000;i++){
    if(primeNumber(i)){
        counter++;
        if(counter == n){
        console.log(i);
        }
    }
}

function primeNumber(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num % i==0){
            return false;
        }
    }
    return true;
}


