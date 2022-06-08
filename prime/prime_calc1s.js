
/*
student version with NO assertion tests or refactoring implemented
*/
const max = 1000;   // Set upper bounds
const min = 0;      // Set lower bounds
let check4prime;    // global object
let primeBucket = new Array(max + 1);

class Check4Prime {
    /*
    Calculates prime numbers and put true or false in an array
    */

    primeCalcArray(){
        for (let i = 2; i <= max; i++) {
            primeBucket[i] = true;
        }
        for (let i = 1; i <= max; i++) {
            if (i % 2 === 0 || i < 3) {
                primeBucket[i] = i === 2;
            } else {
                const sqrt = Math.floor(Math.sqrt(i));
                for (let j = 3; j <= sqrt; j += 2) {
                    if (i % j === 0) {
                        primeBucket[i] = false;
                    }
                }
            }
        }
    }

    primeCheck(num) {
        // Check input against prime array
        if (primeBucket[num] == true) {
            return true;
        }
        else {
            return false;
        }
    }

    /*
    Method to validate input
    */
    checkArgs() {
        /*
        for (var i=0; i < arguments.length; i++)
            console.log(arguments[i]);
        */
        // Check arguments for correct number of parameters if not throw new Error();
        if (arguments.length != 1) {
            throw new Error(`Input out of range`)
        }
        else 
        {
            // If undefined throw new Error();
            if(arguments[0] === undefined)
            {
                throw new Error(`Undefined input`)
            }
            // If zero/empty throw new Error();
            if(arguments == 0 || arguments[0] == "")
            {
                throw new Error(`Input is zero or empty`)
            }
            // Is not integer? throw new Error();
            if(!Number.isInteger(arguments[0]))
            {
                throw new Error(`Input is not an intger`)
            }
            // Get integer from character
            let number = parseInt(arguments[0], 10);
            // If not a number throw new Error();
            if(isNaN(number))
            {
                throw new Error(`Input is not a number`)
            }

            // If less than lower bounds throw new Error();
            if(number < min)
            {
                throw new Error(`Less then lower bounds`)
            }
            // If greater than upper bounds throw new Error();
            if(number > max)
            {
                throw new Error(`Greater then upper bounds`)
            }
        }
    }
} // end Check4Prime class



/*
do the automated tests cases when developer performs test
*/
function checkTest(num)
{
    check4prime = new Check4Prime();
    check4prime.primeCalcArray();
    // run various automated tests
    test_Check4Prime_known_true();
    test_Check4Prime_known_false();
    test_Check4Prime_checkArgs_neg_input();
    test_Check4Prime_checkArgs_above_upper_bound();
    test_Check4Prime_checkArgs_char_input();
    test_Check4Prime_checkArgs_2_inputs();
    test_Check4Prime_checkArgs_zero_input();
    test_Check4Prime_checkArgs_undefined_input();
    test_Check4Prime_checkArgs_non_integer_input();
}

/*
do the check for prime when ordinary user is running solution, you can merge this function with checkTest() if you want
*/
function check(num)
{
    check4prime = new Check4Prime();
    try {
        checkTest();
        // check4prime.checkArgs(num);
        check4prime.primeCheck(num);
        // either use this assertion or the alert box for output
        //assert(check4prime.primeCheck(num), description)
        alert(`Is number ${num} a prime? ${check4prime.primeCheck(num)}`)
        window.location.reload();
    }
    catch (err) {
        let description = `Input/number: ${num}. Error in checkArgs()`;
        assert(check4prime.primeCheck(num), description);
    }

}



/*
append test result in list on web page 
*/
function assert(outcome, description) {
    let output = document.querySelector('#output'); 
    let li = document.createElement('li'); 
    li.className = outcome ? 'pass' : 'fail'; 
    li.appendChild(document.createTextNode(description)); 
    output.appendChild(li); 
}

/*
Test methods, recommended naming convention
(Test)_MethodToTest_ScenarioWeTest_ExpectedBehaviour
In test method the pattern we use is `tripple A`
Arrange, Act and Assert
*/


// Test case 1, check known true primes
function test_Check4Prime_known_true() {
    // The arrangement below is called tripple A
    const  listOfPrimes = [3,17,29,997]
    for(let i = 0; i < listOfPrimes.length; i++)
    {
        try
        {
            check4prime.checkArgs(listOfPrimes[i])
            assert(check4prime.checkArgs(listOfPrimes[i])`Test if ${listOfPrimes[i]} is prime`);
        }
        catch(error)
        {
            assert(true,`Test if ${listOfPrimes[i]} is prime`);
        }
    }

}

// Test case 2, check known false primes
function test_Check4Prime_known_false() {
    const  listOfPrimes = [4,27,49]
    for(let i = 0; i < listOfPrimes.length; i++)
    {
        try
        {
            check4prime.checkArgs(listOfPrimes[i])
            assert(check4prime.checkArgs(listOfPrimes[i])`Test if ${listOfPrimes[i]} is not prime`);
        }
        catch(error)
        {
            assert(true,`Test if ${listOfPrimes[i]} is not prime`);
        }
    }
}

// Test case 3, check negative input
function test_Check4Prime_checkArgs_neg_input() {
    let description = `Test for negative input: -1`;
    try {
        check4prime.checkArgs(-1);
        assert(false,description);
    } 
    catch (error) {
        assert(true, description);
    }
}

// Test case 4, check for upper bound limit
function test_Check4Prime_checkArgs_above_upper_bound() {
    let description = `Test for upper bound limit: 1001`;
    try {
        check4prime.checkArgs(10001);
        assert(false, description);
    } 
    catch (error) {
        assert(true, description);
    }
}

// Test case 5, check for char input
function test_Check4Prime_checkArgs_char_input() {
    let description = `Test for char input: x`;
    try {
        check4prime.checkArgs('x');
        assert(false, description);
    } 
    catch (error) {
        assert(true, description);
    }
}

// Test case 6, check for more than one input
function test_Check4Prime_checkArgs_2_inputs() {
    let description = `Test for 2 inputs: 10,11`;
    try {
        check4prime.checkArgs(10,11);
        assert(false, description);
    } 
    catch (error) {
        assert(true, description);
    }
}

// Test case 7, check for zero/empty input
function test_Check4Prime_checkArgs_zero_input() {
    let description = `Test for input == 0/empty`;
    try {
        check4prime.checkArgs(0);
        check4prime.checkArgs('');
        assert(false, description);
        assert(false, description);
    } 
    catch (error) {
        assert(true, description);
    }
}

// Test case 8, check for undefined input
function test_Check4Prime_checkArgs_undefined_input() {
    let description = `Test with undefined input`;
    try {
        check4prime.checkArgs(undefined);
        assert(false, description);
    } 
    catch (error) {
        assert(true, description);
    }
}

// Test case 9, check for non-integer input
function test_Check4Prime_checkArgs_non_integer_input() {
    let description = `Test for non-integer input: 2.5`;
    try {
        check4prime.checkArgs(2.5);
        assert(false, description);
    } 
    catch (error) {
        assert(true, description);
    }
}