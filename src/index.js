import cipher from './cipher.js';
console.log(cipher);




function cifra(evento) {
  evento.preventDefault(); // evita que pag atualiza//
  let offsetCifrar  = parseInt (document.getElementById("contador").value);
  let stringCifrar =  document.getElementById("mensagem_cifrar").value;
  //  console.log(stringCifrar)
   // console.log(offsetCifrar)
  const cryptograph = cipher.encode(offsetCifrar, stringCifrar);
 console.log(cryptograph);
  
}

function decifrar (evento)  {
  evento.preventDefault();
  let offsetDecifrar  =  parseInt (document.getElementById("contador").value);
  let stringDecifrar  = document.getElementById("mensagem_decifrar").value;
 // console.log(stringDecifrar)
  //console.log(offsetDecifrar)
  const cryptograph = cipher.decode(offsetDecifrar, stringDecifrar);
  console.log(cryptograph);
 
}
const msgCifrada = document.getElementById("enviar1");
msgCifrada.addEventListener("click", cifra);

const msgDecifrada= document.getElementById("enviar2");
msgDecifrada.addEventListener("click", decifrar);
