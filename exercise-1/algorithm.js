const config = {
    MAX_NUMBER_ITERATIONS: 100
}

/**
 * logAppend logs into javaScript console a string or a number
 * and appends that data into HTML div.
 * 
 * @param {string  or number} logInfo 
 */
const logAppend = (logInfo) => {
    console.log(logInfo);
    document.getElementById('numbers').innerHTML += '<p>' + logInfo +'</p>';
}

/**
 * isDivisible checks if two numbers are divisible by each other.
 * 
 * @param {number} number1 
 * @param {number} number2 
 * @returns true if the rest of the division is 0, false if the opposite
 */
const isDivisible = (number1, number2) => {
	if((number1 % number2) === 0)
  	return true;
  return false;
}

/**
 * conditions has all the conditions of the number iteration.
 * 
 * @param {number} number 
 */
const conditions = (number) => {
	switch(true) {
        case isDivisible(number, 3) && isDivisible(number, 5):
            logAppend('Visual Nuts');
            break;
        case isDivisible(number, 5):
            logAppend('Nuts');
            break;
        case isDivisible(number, 3):
            logAppend('Visual');
            break;
        default:
            logAppend(number);
    }
}

/**
 * iterateNumbers iterates the number of times that is defined in config.MAX_NUMBER_ITERATIONS.
 */
const iterateNumbers = () => {
    for(let i = 1; i <= config.MAX_NUMBER_ITERATIONS; i++){
  	    conditions(i);
    }
}

//run the iterations
iterateNumbers();