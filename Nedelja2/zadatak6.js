/*zadatak6.js
    1. За првих 100 бројева исписати:
        * FizzBuzz ако је број дељив и са 3 и са 5
        * Fizz ако је број дељив само са 3
        * Buzz ако је број дељив само са 5
        * Број ако није дељив ни са 3 ни са 5*/

{
    let a;
    for(let a=1; a<=100; a++){
        if (a % 3 ==0 && a % 5==0) {
            console.log('FizzBuzz');
            
        } else if(a % 3==0){
            console.log('Fizz');
        } else if (a % 5==0){
            console.log('Buzz');
        }  else{
            console.log(a);
        }
        
    }
}