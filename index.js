document.addEventListener("DOMContentLoaded", function() {
  var numberInput = document.getElementById("numberInput");
  var result = document.getElementById("result");

  numberInput.addEventListener("input", function() {
    var inputValue = parseInt(numberInput.value);
    result.innerHTML = ""; // Clear previous results

    if (isNaN(inputValue)) {
      result.innerHTML = '<span class="error">Invalid input. Please enter a number.</span>';
    } else if (inputValue < 0) {
      result.innerHTML = '<span class="error">Enter a positive value.</span>';
    } else if (inputValue % 2 === 0) {
      var nextEvenNumbers = generateNextEvenNumbers(inputValue, 3);
      result.innerHTML = "" + nextEvenNumbers.join(", ");
    } else {
      var nextOddNumbers = generateNextOddNumbers(inputValue, 3);
      result.innerHTML = "" + nextOddNumbers.join(", ");
    }
  });

  function generateNextEvenNumbers(startValue, count) {
    var evenNumbers = [];
    var number = startValue + 2; // Skip the current even number

    while (evenNumbers.length < count) {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      }
      number += 2;
    }

    return evenNumbers;
  }

  function generateNextOddNumbers(startValue, count) {
    var oddNumbers = [];
    var number = startValue + 2; // Skip the current odd number

    while (oddNumbers.length < count) {
      if (number % 2 !== 0) {
        oddNumbers.push(number);
      }
      number += 2;
    }

    return oddNumbers;
  }
});
