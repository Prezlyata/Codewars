function count (string) {  
	let uniqueArr = [];
	let arr = string.split('');
	for( let i = 0; i< arr.length; i++){
		if(arr.indexOf(arr[i]) == i){
			uniqueArr.push(arr[i])
		}
	}
	console.log(uniqueArr)
	let tempArr = [];
	let rezArr =[]
	for(let i = 0; i<uniqueArr.length; i++){
		for(let j =0; j<arr.length; j++){
			if(uniqueArr[i] == arr[j]){
				tempArr.push(arr[j]);
			}
		}
		let len = tempArr.length;
		rezArr.push(len);
		tempArr.splice(0);
	}

	let obj = {};
	for(let i = 0; i<uniqueArr.length; i++){
		obj[uniqueArr[i]] = rezArr[i]
	}
	return obj;
}

console.log(count("aavccss"))