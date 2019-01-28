function findUniq(arr) {
	arr.sort((a,b)=>a-b);
	for(let i =0; i<arr.length; i++){
		if(arr[i]==arr[i+1]){
			return arr.pop();
		}else{
			return arr[0];
		}
	}
}
console.log(findUniq([0]))