function findChildren(dancingBrigade){
	let arrRez = [];
	let newArr = dancingBrigade.toLowerCase().split('').sort();
	arrRez.push(newArr[0].toUpperCase());
	for(let i =1; i<newArr.length;i++){
		if(newArr[i] != newArr[i-1]){
			arrRez.push(newArr[i].toUpperCase())
		}else{
			arrRez.push(newArr[i])
		}
	}
	return arrRez.join('')
};

console.log(findChildren('beeeEBb'))