function highestRank(arr){
	let unikArr = [];
	let sumArr = [];
	let tempArr = [];
	for(let i = 0; i <arr.length; i++){
		if(arr.indexOf(arr[i]) == i){
			unikArr.push(arr[i]);
		}
	}
	console.log(unikArr);
	for(let i = 0; i<unikArr.length; i++){
		for(let j = 0; j<arr.length; j++){
			if(unikArr[i] == arr[j]){
				tempArr.push(1);
			}
		}
		sumArr.push(tempArr.reduce(function(a,b){return a+b}))
		tempArr.splice(0);
	}
	let max = Math.max(...sumArr)
	return unikArr[sumArr.indexOf(max)];
}
console.log(highestRank([1, 10, 10, 12, 7, 6, 4, 10, 12]))