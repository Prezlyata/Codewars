function accum(s) {
	let arrOfLetters = [];
	let upArr= [];
	let newArr = s.toLowerCase().split('').reverse();
	let len = s.length;
	for(let i = 0; i< newArr.length; i++){
		len = len-1;
		for(let j = 0; j<len; j++){
			arrOfLetters.push(newArr[i]);
		}
		arrOfLetters.push('-')
	}
	let rezArr = arrOfLetters.reverse().slice(1);
	for(let j = 0; j< rezArr.length; j++){
		upArr.push(rezArr[j]);
		if(rezArr[j] == '-'){
			upArr.push(rezArr[j+1].toUpperCase())
		}
	}
	upArr.unshift(s[0].toUpperCase());
	return upArr.join('');
}

console.log(accum("aBcdaaLLdsduix"))