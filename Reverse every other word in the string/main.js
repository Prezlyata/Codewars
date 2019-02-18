function reverse(str){
	if(str == '   '){
		return ''
	}else{
		let strArr = str.split(' ');
		let rez = [];
		for(let i = 0; i<strArr.length; i++){
			if(i%2 !=0){
				let odd = strArr[i].split('').reverse().join('')
				rez.push(odd)
			}else{
				rez.push(strArr[i])
			}
		}
		return rez.join(' ')
	}
}
