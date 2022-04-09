//function to find whether pollindrom or not
function isPollindrom(num) {
    let revNum = num.toString().split("").reverse().join('');

    return num.toString() == revNum;
}

// console.log(isPollindrom(1231));

//function to find whether pollindrom or not
function isLuckyNumber(num) {
    num = num.toString().split("");

    for (let i = 0; i < num.length; i++) {
        if (num[i] != 4 && num[i] != 7) {
            return false;
        }
    }
    return true;
}

// console.log(isLuckyNumber(4477))

//function to find super luck number
function isSuperLuckyNumber(num) {
    if (!isLuckyNumber(num)) {
        return false;
    }

    let numLength = num.toString().length;
    if (!isLuckyNumber(numLength)) {
        return false;
    }

    numberOfFour = 0;
    numberOfSeven = 0;

    let numArr = num.toString().split('');

    for (let i of numArr) {
        if (i == 4) {
            numberOfFour++;
        }
        if (i == 7) {
            numberOfSeven++;
        }
    }

    if (numberOfFour && !isLuckyNumber(numberOfFour)) {
        return false;
    }

    if (numberOfSeven && !isLuckyNumber(numberOfSeven)) {
        return false;
    }

    return true;
}

//function to find super lucky pollindrom number
function findSuperLuckyNumberPollindrom(num) {
    let nthLuckyNo = 0;

   for (let i = 4444; nthLuckyNo < num; i++) {
      if (isPollindrom(i) && isSuperLuckyNumber(i)) {
        nthLuckyNo += 1;
        if (nthLuckyNo == num) {
            return i;
        }
      } 
   }
}
//for the value n  given in the function, print the nth smallest super lucky pollindrome
console.log(findSuperLuckyNumberPollindrom(3));