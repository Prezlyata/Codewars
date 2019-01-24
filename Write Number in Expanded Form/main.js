function expandedForm(num) {
	var arr = num.toString().split('').reverse();
	var result = [];
	for(var i = 0; i < arr.length; i++){
		arr[i] === '0' ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
	}
	return result.reverse().join(' + ')
}