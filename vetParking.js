function vetParking(input) {
  let daysQty = Number(input.shift());
  let hoursQty = Number(input.shift());
  let price = 0;
  let sum = 0;
  let totalSum = 0;
  for (let i = 1; i <= daysQty; i++) {
    
    for (let k = 1; k <= hoursQty; k++) {
      if (i % 2 == 0 && k % 2 != 0) {
        price = 2.5;
      } else if (i % 2 != 0 && k % 2 == 0) {
        price = 1.25;
      } else {
        price = 1;
      }
      sum += price;
      
    }
    totalSum += sum;
    console.log(`Day: ${i} - ${sum.toFixed(2)} leva`);
    sum = 0;
  }
  console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
vetParking(["2", "5"]);
