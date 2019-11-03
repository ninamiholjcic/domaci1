/*Исписати Марио пирамиду одређене висине:
    
    ```
    За n = 5

        # #
       ## ##
      ### ###
     #### ####  
    ##### #####
    ```
*/
let n = 5;
let text='';
let text1='';

    for (let i = 1; i <=n; i++) {
     text = ''; 
     text1='';  
    for(let j = 1; j <=(n-i); j++) {
        text += ' ';
    }
        for (let k = 1; k <= i; k++) {
            text+='#';

        }
        for(j=1; j<=i;j++){
            text1+='#';
        }
        console.log(`${text} ${text1}`);
        
    }