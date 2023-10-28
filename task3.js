const numbers = [11, 12, 13, 14, 15, 16];
const squaredNumbers = numbers.map((num) => num * num);
const sumOfSquaredEvenNumbers = squaredNumbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        return acc += num
    }
     return acc;
    }, 0);
    console.log("Sum of squared even numbers :", sumOfSquaredEvenNumbers);


    //Input - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] expected O/p- 220
    //Input - [11, 12, 13, 14, 15, 16]; expected O/p- 596
