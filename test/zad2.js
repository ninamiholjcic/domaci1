let m=100;
let n=200;
let prosek=n/m;

for(let counter=m; counter<=n;counter++){
    if (counter % 7==0) {
        console.log(counter);
        prosek/=counter;
        
    }

}
console.log(`Prosek brojeva deljivih sa 7 u intervalu od M do N uključujući M i N je ${prosek}
`);