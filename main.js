"user strict";
const generate = document.getElementById("submit");
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "~!@#$%^&*()_+=|";
let newPassword = "";

const generatePassword = (lower, upper, number, special) => {
    let arrCharacters = [];
    const lowerSelect = document.getElementById("lowerCase");
    const upperSelect = document.getElementById("upperCase");
    const numberSelect = document.getElementById("numbers");
    const specialCharacterSelect = document.getElementById("specialCharacters");

    if(lowerSelect.checked) arrCharacters.push(lower[Math.floor(Math.random() * lower.length)]);
    if(upperSelect.checked) arrCharacters.push(upper[Math.floor(Math.random() * upper.length)]);
    if(numberSelect.checked) arrCharacters.push(number[Math.floor(Math.random() * number.length)]);
    if(specialCharacterSelect.checked) arrCharacters.push(special[Math.floor(Math.random() * special.length)]);
    
    return arrCharacters.length === 0 ? "" : arrCharacters[Math.floor(Math.random() * arrCharacters.length)];
}

generate.addEventListener("click", (e) => {
    e.preventDefault();
    const length = document.getElementById("length").value;
    newPassword = "";
    if(Number(length) <= 0) alert("You have to put the length that is greater than 0.");
    else {   
        for(let i = 0;i < length;i++) {
            newPassword += generatePassword(lowerCaseLetters, upperCaseLetters, numbers, specialCharacters);
            if(newPassword === "") {
                i = length;
                alert("You have to choose what the password will contain.");
            }
        }
        document.getElementById("password").value = Number(newPassword) === 0 ? "" :  newPassword;
    }
});