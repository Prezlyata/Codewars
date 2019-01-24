function disemvowel(str) {
	let arr = [];
	str.split('').filter((elem) => {
		if(elem != "i" && elem != 'e' && elem != "O" && elem != 'o'  && elem != 'a' && elem != 'u'   && elem != 'I'){
			arr.push(elem);
		}
		return arr;
	});
	str = arr.join('');
	return str;
}