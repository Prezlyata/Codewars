function list(names){
	let arrOfNames = [];

	if(names.length == 0){
		return "";
	} else if (names.length == 1) {
		return names[0].name;
	} else if (names.length == 2) {
		return names[0].name + " " + "&" + " " + names[1].name;
	} else if (names.length > 2) {
		for(let i = 0; i < names.length; i++){
			arrOfNames.push(names[i].name)
		}
		let res = '';
		for(let j = 0; j < arrOfNames.length - 1; j++) {
			res = res + arrOfNames[j] + ', ';
		}
		res = res.slice(0, -2);
		return res + ' & ' + arrOfNames[arrOfNames.length -1];
	}
}