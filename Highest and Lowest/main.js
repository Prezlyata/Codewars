function highAndLow(numbers){
	let max = ''+Math.max(...numbers.split(' '));
	let min = ''+Math.min(...numbers.split(' '));
	return max + ' '+ min
}

console.log(highAndLow("1 2 3 4 5"))