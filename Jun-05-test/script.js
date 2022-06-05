let n = parseInt(prompt("Enter number"));

for(let i=1;i<=n;i++){
    if(primeNumber(i)){
        console.log(i);
    }
}

function primeNumber(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num % i==0){

            // number not prime
            return false;
        }
    }
    return true;
}

