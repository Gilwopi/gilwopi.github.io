const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  const output = document.getElementById("output");
  let message = document.getElementById("message").value;
  let key = document.getElementById("key").value;
  let i = 0;
  //Ensures message and key are same length
  if (key.length < message.length){
    while(key.length < message.length){
      key += key[i];
      i = (i + 1) % key.length;
    }
  } else if (message.length < key.length){
    key = key.substring(0,message.length);
  }
  output.innerHTML = 'Encrypted/Decrypted Message: "' + encrypt(message,key) + '"';
});

function encrypt(message, key){
  let encryption = "";
  for (let i = 0; i < message.length; i++){
    const binEncryption = (String.fromCharCode(message[i].charCodeAt(0) ^ key[i].charCodeAt(0)));
    encryption += binEncryption;
  }
  return encryption;
}
