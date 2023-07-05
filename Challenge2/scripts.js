const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay == '00') && (minuteOfDay == '00')) { // or 0 or '0'
	const taxAsDecimal = parseInt(tax) / 100  // works the same with '100'?
    const startingAfterTax = salary * (1 - taxAsDecimal) // works the same with '1'? and brackets 
	const balance = startingAfterTax - transport - food - rent // starting to startingAfterTax
    console.log("R "+ balance.toFixed(2)) // do console log inside so it only runs when above conditions are true
} // round to 2 decimal places not 3, add "R "



// const rent = 400;
// const tax = '8%';
// const food = 51.7501;
// const salary = 800;
// const transport = 10.2;
// const hourOfDay = 00;
// const minuteOfDay = 00;

// // Only change below this line

// if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
// 	const taxAsDecimal = tax / '100'
//   const startingAfterTax = salary * '1' - taxAsDecimal
// 	const balace = starting - transport - food - rent
// }
	
// console.log(balance.toFixed(3))