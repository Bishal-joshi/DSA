// import { linearSearch, binarySearch, binarySearchV2, binarySearchV3 } from './search'
const { linearSearch, binarySearch, binarySearchV2, binarySearchV3 } = require('./search');


const a = [1, 2, 3, 4, 5, 6, 7];

console.log(linearSearch(3, a)); // Example usage with element 3 in the array 'a'
console.log(binarySearchV2(20,a,0,a.length))
console.log(binarySearch(20,a))
console.log(binarySearchV3(20,a,0,a.length))
