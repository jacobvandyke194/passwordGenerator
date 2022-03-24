var generateButton = document.querySelector("#generateButton");

function getPassword(){
    var characterSet = [];
    const upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const symbols = ["!","@","#","$","%","^","&","*"];
    const numbers = ['1','2','3','4','5','6','7','8','9','0'];
    const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


    //prompts
    var passwordLength = prompt("Character Length? (8-128): ");
    if (passwordLength <= 7 || passwordLength > 128) {
        alert("Invalid Password Count!");
        
    }

    var uppercaseResponse = confirm("Would you like to include uppercase letters in the password?");
    if (uppercaseResponse){
        characterSet = upperCase.concat(characterSet);
    } else {
        console.log("No uppercase letters here!");
    }
    
    var lowercaseResponse = confirm("Would you like lowercase characters included?");
    if (lowercaseResponse){
        characterSet = lowerCase.concat(characterSet);
    } else {
        console.log("No lowerCase Here!");
    }

    var numberResponse = confirm("Would you like numbers included?");
    if (numberResponse){
        characterSet = numbers.concat(characterSet);
    } else{
        console.log("No numbers here!")
    }

    var symbolResponse = confirm("Would you like symbols included?");
    if (symbolResponse){
        characterSet = symbols.concat(characterSet);
    } else{
        console.log("No symbols here!")
    }


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