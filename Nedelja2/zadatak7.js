
  /*Исписати Марио пирамиду одређене висине:
    
    ```
    За n = 5

    #
    ##
    ###
    ####
    ##### */
{
  let n=5;
  let text = '';

  for (let i = 1; i <= n; i++) {
     text = '';

    for (let j = 1; j <= i; j++) {
      text += '#';
    }

    console.log(text);
  }
  

}  

