function iqTest(numbers){
	let arrOfNumbers = [];
	let newArrOfNumbers = [];
	let arr = numbers.split('')
	arr.push(" ")
	for(let i = 0; i<arr.length; i++){
		arrOfNumbers.push(arr[i]);
		if(arr[i] == " "){
			arrOfNumbers.splice(arrOfNumbers.length-1,arrOfNumbers.length);
			newArrOfNumbers.push(+arrOfNumbers.join(''))
			arrOfNumbers.splice(0)
		}
	}
	let evenArr = [];
	let oddArr = [];
	console.log(newArrOfNumbers);
	for(let i = 0; i<newArrOfNumbers.length; i++){
		if((newArrOfNumbers[i])%2 == 0){
			oddArr.push(newArrOfNumbers[i])
		}else{
			evenArr.push(newArrOfNumbers[i])
		}
	}
	if(oddArr.length > evenArr.length){
		return (newArrOfNumbers.indexOf(evenArr[0]))+1
	}else{
		return (newArrOfNumbers.indexOf(oddArr[0]))+1
	}
}
console.log(iqTest("2 4 7 18 10"))