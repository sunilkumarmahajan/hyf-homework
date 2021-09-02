let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//getting the doubled numbers of odd nos.
console.log("The doubled numbers are  " + numbers.filter(numbers => numbers % 2!==0).map(numbers=>numbers*2));
//result in array
let DoubledNumbers= numbers.filter(numbers => numbers % 2!==0).map(numbers=>numbers*2);
console.log("The doubled numbers are  ", DoubledNumbers);