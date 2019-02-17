function balance(left,right){
	let arrLeft = left.split('');
	let arrRight = right.split('');
	let sumLeft = [];
	let sumRight = [];
	for(let i = 0; i <arrLeft.length; i++){
		if( arrLeft[i] == "!"){
			sumLeft.push(2);
		}else{
			sumLeft.push(3);
		}
	}
	let RezSumLeft = sumLeft.reduce(sun = (a,b) =>{return a + b})
	for(let i = 0; i <arrRight.length; i++){
		if( arrRight[i] == "!"){
			sumRight.push(2);
		}else{
			sumRight.push(3);
		}
	}
	let RezSumRight = sumRight.reduce(sun = (a,b) =>{return a + b})
	if(RezSumLeft === RezSumRight){
		return "Balance";
	}else if(RezSumLeft > RezSumRight){
		return "Left";
	}else{
		return "Right";
	}
}
console.log(balance("!??","?!!"))