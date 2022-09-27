const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  const output = document.getElementById("output");
  const radios = document.getElementsByName("choice");
  let choice;
  for (let i = 0; i < radios.length; i++){
    if (radios[i].checked){
      choice = radios[i].value;
    }
  }
  const message = document.getElementById("message").value;
  const key = document.getElementById("key").value;
  console.log(choice);
  let result;
  if (choice == "encrypt"){
    result = encrypt(message, key);
  } else if (choice == "decrypt"){
    result = decrypt(message, key);
  } else {
    console.log("Uh oh!");
  }
  output.innerHTML = 'Encrypted/Decrypted Message: "' + result + '"';
});

function encrypt(message, key){
  let encryption = "";
  const keyNum = Number(key);
  for (let i = 0; i < message.length; i++){
    let ascii = Number(message[i].charCodeAt());
    console.log(ascii);
    ascii = ((ascii + keyNum - 32) % 94) + 32;
    console.log(ascii);
    encryption += String.fromCharCode(ascii);
  }
  return encryption;
}

function decrypt(message, key){
  let encryption = "";
  const keyNum = Number(key);
  for (let i = 0; i < message.length; i++){
    let ascii = Number(message[i].charCodeAt());
    console.log(ascii);
    ascii = ((ascii - keyNum - 32) % 94) + 32;
    console.log(ascii);
    encryption += String.fromCharCode(ascii);
  }
  return encryption;
}