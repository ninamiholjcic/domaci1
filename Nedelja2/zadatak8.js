// Исписати Марио пирамиду одређене висине:
    
// ```
// За n = 5

//     #
//    ## 
//   ###
//  ####   
// #####
// ```

{
    let n=5;
    let text='';
  
    for (let i = 1; i <= n; i++) {
      let text = ' ';
      
      for (let j = 1; j <= (n - i); j++) {
        text += ' ';
      }
      
      for (let k = 1; k <= i; k++) {
        text += '#';
      }
      
      console.log(text);
    }
  } 