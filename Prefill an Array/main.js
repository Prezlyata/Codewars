function prefill(n, v) {
	let arrRez = [];
	let check = NaN;
	let error = new Error();
	if(n == 0){
		return []
	}
	for(let i= 0; i<n; i++){
		arrRez.push(v)
	}
	if(arrRez.length == 0){
		throw new TypeError(n+" is invalid");
	}else{
		return arrRez
	}
}
console.log(prefill(0, 1))