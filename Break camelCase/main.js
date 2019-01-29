function solution(string) {
	let stringArr = string.split('');
	let newString = '';
	for (let i = 0; i < stringArr.length; i++) {
		if (/[A-Z]/.test(stringArr[i]) === true) {
			newString += ' ' + stringArr[i];
		} else {
			newString += stringArr[i];
		}
	}
	return newString;
}
console.log(solution('camelCasing'))