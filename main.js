const passwordDisplayEl = document.getElementById('generatedpassword');
const lengthEl = document.getElementById('length')
const clipboardEl = document.getElementById('clipboard');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numberCheckbox = document.getElementById('number');
const symbolCheckbox = document.getElementById('symbol');
const generatePasswordEl = document.getElementById('generatePassword')

generatePasswordEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const useUppercase = uppercaseCheckbox.checked
    const useLowercase = lowercaseCheckbox.checked
    const useNumber = numberCheckbox.checked
    const useSymbol = symbolCheckbox.checked

    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz'
    const numberChar = '0123456789'
    const symbolChar = '!$%&*@?/<>.#{}[]'

    let allChar = '';
    if (useUppercase) allChar = allChar + uppercaseChar;
    if (useLowercase) allChar = allChar + lowercaseChar;
    if (useSymbol) allChar = allChar + symbolChar;
    if (useNumber) allChar = allChar + numberChar;

    if  (allChar === '') {
        alert('Please, select at least one character type.')
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex= Math.floor(Math.random() * allChar.length);
        password = password + allChar[randomIndex];
    }
    
    passwordDisplayEl.textContent = password;
})

    clipboardEl.addEventListener('click', () => {;
        const textArea = document.createElement('textarea');
        textArea.value = passwordDisplayEl.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Password copied to clipboard');

    })

