var generateButton = document.querySelector("#generateButton");

function getPassword(){
    var characterSet = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",'1','2','3','4','5','6','7','8','9','0',"!","@","#","$","%","^","&","*"];
    

    var passwordLength = 15;
    var password = "";
    for (var i = 0; i < passwordLength; i++){
        var randomCharacters = characterSet[Math.floor(Math.random() * characterSet.length)];
        password = password.concat(randomCharacters);
    }
    return password;
}

function generatePassword(){
    var password = getPassword();
    var passwordText = document.querySelector("#passwordBox");
    passwordText.value = password;
}

generateButton.addEventListener("click", generatePassword);