
let n=5;
let txt='';
for(let i=1;i<=5;i++){
    txt = '';
    for(let j=i;j<10;j++){
      txt += '';
    }
    for(let k=0;k<(i*2)-1;k++){
      txt += '*';
    }
    console.log(txt);
  }
  
  for(let i=5-1;i>=1;i--){
    txt = '';
    for(let j=i;j<10;j++){
      txt += '';
    }
    for(let k=0;k<(i*2)-1;k++){
      txt += '*';
    }
    console.log(txt);
  }
  
