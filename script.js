//Recovery of the cta from the HTML document

const refreshImg = document.querySelector("#refresh");
const copyImg = document.querySelector("#copy");
const passwordInput = document.querySelector("#password");
const lettersCheckbox = document.querySelector("#letters");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const lengthRange = document.querySelector("#length");
const length_value = document.querySelector("#length_value")

refreshImg.addEventListener("click", generatePassword);

function generatePassword(){
    const length = lengthRange.value;
    const hasLetters = lettersCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;

    //Create a table of possible caracter with selected option
    const possibleChars = (hasLetters ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" : "")
                            + (hasNumbers ? "0123456789" : "")
                            + (hasSymbols ? "!@#$%^&*()" : "");

    // Générez le mot de passe en sélectionnant des caractères aléatoires
    let password = "";
    for(let i = 0; i < length; i++){
        password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    //Mise a jour du mot de passe généré
    passwordInput.value = password;

    copyImg.src = "assets/icons/copy.svg";
}

lengthRange.addEventListener("input", generatePassword);

//Copy element of the input
function copy(){
    let passwordInput = document.querySelector("#password")
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); //for mobile device
    
    navigator.clipboard.writeText(passwordInput.value);

    copyImg.src = "assets/icons/success.svg";
}

copyImg.addEventListener("click", copy);

//Refresh img rotate animation
function refreshRotate(){
    refreshImg.animate(
        [
          // étapes/keyframes
          { transform: "rotate(0deg)" },
          { transform: "rotate(360deg)" },
        ],
        {
          // temporisation
          duration: 500,
          iterations: 1,
          easing: "ease-in-out"
        },
      );
}

refreshImg.addEventListener("click", refreshRotate);

function lengthValue (){
    length_value.innerHTML = "(" + lengthRange.value + ")";
}

lengthRange.addEventListener("input", lengthValue);

generatePassword();