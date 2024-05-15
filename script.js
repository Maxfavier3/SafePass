//Recovery of the cta from the HTML document

const refreshImg = document.querySelector("#refresh");
const copyImg = document.querySelector("#copy");
const passwordInput = document.querySelector("#password");
const lettersCheckbox = document.querySelector("#letters");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const lengthRange = document.querySelector("#length");

refreshImg.addEventListener("click", generatePassword);

function generatePassword(){
    const length = lengthRange.value;
    const hasLetters = lettersCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;

    //Créer un tableau de caractère possibles selon les options selectionne
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
}

lengthRange.addEventListener("input", generatePassword);

function copy(){
    let passwordInput = document.querySelector("#password")
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); //for mobile device
    
    navigator.clipboard.writeText(passwordInput.value);

    alert("Text copied !")
}

copyImg.addEventListener("click", copy);

generatePassword();