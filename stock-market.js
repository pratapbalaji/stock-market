function maxProfit (inputArray) {

  var profit = 0;
  var priceDifference = 0;

  if (inputArray.length === 1) { return 0; }

  for (i = 0; i < inputArray.length - 1; i++) {

    for (j = i+1; j < inputArray.length; j++) {
      if (priceDifference < (inputArray [j] - inputArray[i])) {
        priceDifference = inputArray [j] - inputArray[i];
      }
    }

    if (priceDifference > profit) {
      profit = priceDifference;
    }

  }

  if (profit < 0) { return 0; }

  return profit;
}

var inputArray = [];
var notNumberFlag = false;
var profit = 0;

for (var i = 2; i < process.argv.length; i++) {
  if (isNaN(Number(process.argv[i]))) { notNumberFlag = true; }
  else { inputArray.push(Number(process.argv[i])); }
}

if (inputArray.length === 0) {
  console.log("Enter stock prices!");
} else if (!notNumberFlag) {

  profit = maxProfit(inputArray);

  if (profit === 0) {
    console.log("There is no profit to be made.");
  } else {
    console.log("The max profit to be made is " + profit);
  }
} else {
  console.log("Not all inputs are numbers. Try again.");
}








