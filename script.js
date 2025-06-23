//your JS code here. If required.
function SecondHighest(arr) {
	let uniqueNumbers = num.filter((num,index) => arr.indexOf(num) === index)
	.sort((a,b) => b -a)
	return uniqueNumbers[1]
}
console.log(SecondHighestNumber([1, 2, 3, 4, 5])); // Output: 4