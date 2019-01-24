function avgArray(arrs) {
	var l = arrs.length;
	var resArr = [];
	temp = [];
	temp2 = [];

	arrs.map(arr => {
		arr.map(el => {temp.push(el)})
	});

	var iterator = temp.length/l;

	for (var i = 0; i < temp.length; i++) {
		for (var j = i; j < temp.length; j+=iterator) {
			temp2.push(temp[j]);
		}
	}

	var sortedArr = temp2.splice(0, temp.length);

	function averageEvery(arr, n) {
		if (!arr || !n){
			return false;
		}
		let groups = [];
		while (arr.length) {
			groups.push(arr.splice(0, n));
		}
		return groups.map(group =>
						  group.reduce((a, b) => a + b) / group.length
						 );
	}

	return averageEvery(sortedArr, l);
}