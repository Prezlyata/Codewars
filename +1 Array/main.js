function upArray(arr){
	let len = arr.length - 1;
	let rezArr = [];
	for(let i = 0; i<arr.length; i++){
		if(arr[i]<0 || arr[i]>9 ){
			return null;
		}
	}
	if(arr[len] != 9){
		arr[len] =arr[len]+1;
		return arr;
	}else{
		for(let i = arr.length - 1; i>= 0; i--){
			if(arr[i] == 9){
				arr[i] = 0;
				rezArr.unshift(arr[i])
				arr[i - 1] = arr[i - 1] + 1
			}else{
				rezArr.unshift(arr[i])
			}
		}
		return rezArr
	}
}
console.log(upArray([-3]))