// for range slider
const charcterLength = document.querySelector('#character-lenght-value');
const rangeInput = document.querySelector('#range-input');
// for check boxes
const uppercaseLetters = document.querySelector('#uppercase-letters');
const lowercaseLetters = document.querySelector('#lowercase-letters');
const includeNumbers = document.querySelector('#include-numbers');
const includeSymbols = document.querySelector('#include-symbols');
const strenghtRate = document.querySelector('#strenght-rate');
const rectangles = document.querySelectorAll('.rectangle');
const strenghtDescription = document.querySelector('#strenght-description');
let counter = 3;
// for password generation
const generateBtn = document.querySelector('#generate-btn');
const generatedPassword = document.querySelector('#generated-password');

//for function parameters
let charcterLengthValue;
let uppercaseLettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLettersString = "abcdefghijklmnopqrstuvwxyz";
let digits = "0123456789";
let symbolsString = '';
//for password copy
const copySvg = document.querySelector('#copy-svg');
const copied = document.querySelector('#copied');
const copySection = document.querySelector('.copy-section');


function displayRange(value){
    charcterLengthValue = parseInt(value);
    charcterLength.textContent = charcterLengthValue;
    let range = (charcterLengthValue - rangeInput.min)/(rangeInput.max - rangeInput.min)*100;
    rangeInput.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + range + '%, black ' + range + '%, black 100%)'; 
}

//onLoad
displayRange(rangeInput.value);
displayStrength(3);

rangeInput.addEventListener(('input'), ()=>{
       displayRange(rangeInput.value)
})

function displayStrength(counter){
    if(counter == 1){
        rectangles.forEach((item, index)=>{
            if(index < 1){
                item.classList.add('one');
            }
        })
        strenghtDescription.textContent = "TOO WEAK!";
    }
    else if(counter == 2){
        rectangles.forEach((item, index)=>{
            if(index < 2){
                item.classList.add('two');
            }
        })
        strenghtDescription.textContent = "WEAK";
    }
    else if(counter == 3){
        rectangles.forEach((item, index)=>{
            console.log(item);
            if(index < 3){
                item.classList.add('three');
            }
        })
        strenghtDescription.textContent = "MEDIUM";
    }
    else if(counter == 4){
        rectangles.forEach((item, index)=>{
            if(index < 4){
                item.classList.add('four');
            }
        })
        strenghtDescription.textContent = "STRONG";
    }
}

function removeStrength(counter){
    if(counter == 1){
        rectangles.forEach((item, index)=>{
            if(index < 1){
                item.classList.remove('one');
            }
        })
        strenghtDescription.textContent = "TOO WEAK!";
    }
    else if(counter == 2){
        rectangles.forEach((item, index)=>{
            if(index < 2){
                item.classList.remove('two');
            }
        })
        strenghtDescription.textContent = "WEAK";
    }
    else if(counter == 3){
        rectangles.forEach((item, index)=>{
            if(index < 3){
                item.classList.remove('three');
            }
        })
        strenghtDescription.textContent = "MEDIUM";
    }
    else if(counter == 4){
        rectangles.forEach((item, index)=>{
            if(index < 4){
                item.classList.remove('four');
            }
        })
        strenghtDescription.textContent = "STRONG";
    }
}


function generateRandomPassword(lenghtValue, uppercaseLettersStringValue, lowercaseLettersStringValue, digitsValue, symbolsValue){
    let generatedPasswordValue = '';
    let parameters = '';
    parameters += uppercaseLettersStringValue + lowercaseLettersStringValue + digitsValue + symbolsValue;
    console.log(parameters);
    for (let i = 0; i < lenghtValue; i++) {
        generatedPasswordValue += parameters.charAt(Math.floor(Math.random() * parameters.length));
    }
    generatedPassword.textContent = generatedPasswordValue;
}

uppercaseLetters.addEventListener(('change'), ()=>{
    if(uppercaseLetters.checked){
        counter++;
        // displayStrength(uppercaseLetters.id);
        displayStrength(counter);
        uppercaseLettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else{
        removeStrength(counter);
        counter--;
        displayStrength(counter);
        uppercaseLettersString = "";
    }
})

lowercaseLetters.addEventListener(('change'), ()=>{
    if(lowercaseLetters.checked){
        counter++;
        displayStrength(counter);
        lowercaseLettersString = "abcdefghijklmnopqrstuvwxyz";
    }
    else{
        removeStrength(counter);
        counter--;
        displayStrength(counter);
        lowercaseLettersString = "";
    }
})

includeNumbers.addEventListener(('change'), ()=>{
    if(includeNumbers.checked){
        counter++;
        displayStrength(counter);
        digits = "0123456789";
    }
    else{
        removeStrength(counter);
        counter--;
        displayStrength(counter);
        digits = "";
    }
})

includeSymbols.addEventListener(('change'), ()=>{
    if(includeSymbols.checked){
        counter++;
        displayStrength(counter);
        symbolsString = "~!@#$%^&*()_-+={[}]|\:;<,>.?/";
    }
    else{
        removeStrength(counter);
        counter--;
        displayStrength(counter);
        symbolsString = "";
    }
})

generateBtn.addEventListener(('click'), ()=>{
    generateRandomPassword(charcterLengthValue, uppercaseLettersString, lowercaseLettersString, digits, symbolsString);
})


function copyText(){
    let elementText = generatedPassword.textContent;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText );
    copySection.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.remove();
}

copySvg.addEventListener(('click'), ()=>{
    copied.style.display = 'block';
    copyText(generatedPassword);
    setTimeout(()=>{
        copied.style.display = 'none'}
        ,2000);
})