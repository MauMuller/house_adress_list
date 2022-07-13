function noSpecialChars(value){
    const chars = ["!","@","#","$","%","¨","&","*","(",")","+"];
    let lastLetter = value.substr(value.length-1, value.length);
    return chars.includes(lastLetter) ? value.substr(0, value.length-1) : value;
}

function noNumbersChars(value){
    let lastLetter = value.substr(value.length-1, value.length);
    return isNaN(lastLetter) ? value : value.substr(0, value.length-1);
}

function onlyNumbers(value){
    let lastLetter = value.substr(value.length-1, value.length);
    return isNaN(lastLetter) ? value.substr(0, value.length-1) : value;
}

function randomHexadecimal(){
    const roundedNumer = (maxNumberToRandomGenerate)=> { return Math.round(Math.random() * maxNumberToRandomGenerate); }
    const arrayAlphaNumeric = ['a','b','c','d','e','f'].map(letter=>letter.toUpperCase());

    const arrayHexadecimal = [];

    while (arrayHexadecimal.length < 6){
        const randomNumeric = roundedNumer(9);
        const randomAlphaNumeric = arrayAlphaNumeric[roundedNumer(5)];
        const arrayWithTwoValues = [randomAlphaNumeric, randomNumeric];

        arrayHexadecimal.push(arrayWithTwoValues[roundedNumer(1)]);
    }

    const hexadecimalString = arrayHexadecimal.reduce((acumulator, valorAtual)=>{
        return acumulator + valorAtual
    }, "");


    return `#${hexadecimalString}`;
}