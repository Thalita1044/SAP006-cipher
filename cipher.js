const cipher = {
  encode: function encode(offset, string) {
    let diary = "";
    for (let i = 0; i < string.length; i++){
      let cryptograph = string.charCodeAt(i);
      
      if (cryptograph >=65 && cryptograph <= 90) {
        cryptograph= ((cryptograph - 65 + offset) % 26) + 65; 
        
        console.log(cryptograph)
      }
      else if (cryptograph >= 97  && cryptograph <= 122){
        cryptograph= ((cryptograph - 97 + offset) % 26) + 97; 
       
     }

      diary += String.fromCharCode(cryptograph);
    }
 
       return diary;
  },
  decode: function decode(offset, string) {
    let diary = "";
        for(let i = 0; i < string.length; i++){
          let cryptograph = string.charCodeAt(i); 
            if(cryptograph >= 65 && cryptograph <= 90){
              cryptograph= ((cryptograph + 65 - offset) % 26) + 65;
            }
            else if (cryptograph >= 97 && cryptograph <= 122){
              cryptograph = 122 - ((122 - cryptograph + offset) % 26 );
            }
            diary += String.fromCharCode(cryptograph);
        }
return diary;
      }

};
export default cipher;