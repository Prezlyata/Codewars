/* res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)" */
function acum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum = sum + arr[i];
	}
	return sum;
}

function stockList(listOfArt, listOfCat) {
	let arrRez = [];
	let arrLetter = [];
	let arrOfarr = [];
	let arrSum = [];
	let arrNumbers = [];
	let arrOfUniqueLetters = [];
	let arrOfUniqueNumbers = [];
	let arrOfObjects = [];
	for (let j = 0; j < listOfArt.length; j++) {
		arrOfarr.push(listOfArt[j].split(''));
	}
	//////////////////////// 
	let superd = [];
	let ress = []
	for (let i = 0; i < arrOfarr.length; i++) {
		for (let j = 0; j < arrOfarr[i].length; j++) {
			if (arrOfarr[i][j] == "0" || arrOfarr[i][j] == "1" || arrOfarr[i][j] == "2" || arrOfarr[i][j] == "3" || arrOfarr[i][j] == "4" || arrOfarr[i][j] == "5" || arrOfarr[i][j] == "6" || arrOfarr[i][j] == "7" || arrOfarr[i][j] == "8" || arrOfarr[i][j] == "9") {
				superd.push(arrOfarr[i][j]);
			}
		}
		arrNumbers.push(+superd.join(''));
		superd.splice(0);
	}
	console.log(arrNumbers)
	let sumOfArr = acum(arrNumbers);
	if (sumOfArr == 0) {
		return ""
	} else {
		////////////
		for (let i = 0; i < listOfArt.length; i++) {
			arrLetter.push(listOfArt[i].charAt(0))
		}
		console.log(arrLetter)
		for (let i = 0; i < arrLetter.length; i++) {
			if (arrLetter.indexOf(arrLetter[i]) == i) {
				arrOfUniqueLetters.push(arrLetter[i])
			}
		}
		console.log(arrOfUniqueLetters)

		for (let i = 0; i < arrLetter.length; i++) {
			arrOfObjects.push(arrLetter[i] + ":" + arrNumbers[i])
		}
		console.log(arrOfObjects)
		let newArrOfObjects = [];
		for (let i = 0; i < arrOfObjects.length; i++) {
			let key = arrOfObjects[i].slice(0, 1);
			let val;
			if (arrOfObjects[i].length == 3) {
				val = arrOfObjects[i].slice(2, 3);
				console.log(val)
			}
			if (arrOfObjects[i].length == 4) {
				val = arrOfObjects[i].slice(2, 3) + arrOfObjects[i].slice(3, 4);
			} else {
				val = arrOfObjects[i].slice(2, 3) + arrOfObjects[i].slice(3, 4) + arrOfObjects[i].slice(4, 5);
			}
			let newobj = {};
			newobj[key] = +val;
			newArrOfObjects.push(newobj);
		}
		console.log(newArrOfObjects)
		//////////////////
		let tempArr = [];
		for (let j = 0; j < arrOfUniqueLetters.length; j++) {
			for (let i = 0; i < newArrOfObjects.length; i++) {
				for (let key in newArrOfObjects[i]) {
					if (key == arrOfUniqueLetters[j]) {
						tempArr.push(newArrOfObjects[i][key])
					}
					console.log(acum(tempArr))
				}
			}
			arrOfUniqueNumbers.push(acum(tempArr))
			tempArr.splice(0);
		}
		///////////////
		console.log(arrOfUniqueNumbers)
		console.log(arrOfUniqueLetters)
		console.log(listOfCat)
		console.log(arrLetter)
		/////////////
		for (let i = 0; i < arrOfUniqueLetters.length; i++) {
			for (let j = 0; j < listOfCat.length; j++) {
				if (arrOfUniqueLetters[i] == listOfCat[j]) {
					arrRez.push((arrOfUniqueLetters[i]) + ":" + arrOfUniqueNumbers[i]);
				} else {
					arrRez.push((listOfCat[j]) + ":" + "000");
				}
			}
		}
		console.log(arrRez)
		let newArrOfObjectsSum = [];
		for (let i = 0; i < arrRez.length; i++) {
			let key = arrRez[i].slice(0, 1);
			let val;

			if (arrRez[i].length == 3) {
				val = arrRez[i].slice(2, 3);
			}
			if (arrRez[i].length == 4) {
				val = arrRez[i].slice(2, 3) + arrRez[i].slice(3, 4);
			}
			if (arrRez[i].length == 5) {
				val = arrRez[i].slice(2, 3) + arrRez[i].slice(3, 4) + arrRez[i].slice(4, 5);
			} else {
				val = arrRez[i].slice(2, 3) + arrRez[i].slice(3, 4) + arrRez[i].slice(4, 5) + arrRez[i].slice(5, 6);
			}
			let newobj = {};
			newobj[key] = +val;
			newArrOfObjectsSum.push(newobj);
		}
		console.log(newArrOfObjectsSum)
		///////////
		let arrOfUniqueNumbersNew = [];
		for (let j = 0; j < listOfCat.length; j++) {
			for (let i = 0; i < newArrOfObjectsSum.length; i++) {
				for (let key in newArrOfObjectsSum[i]) {
					if (key == listOfCat[j]) {
						tempArr.push(newArrOfObjectsSum[i][key])
					}
					console.log(acum(tempArr))
				}
			}
			arrOfUniqueNumbersNew.push(acum(tempArr))
			tempArr.splice(0);
		}
		console.log(arrOfUniqueNumbersNew)
		let arrFinalRez = [];
		for (let i = 0; i < arrOfUniqueNumbersNew.length; i++) {
			arrFinalRez.push("(" + listOfCat[i] + " " + ":" + " " + arrOfUniqueNumbersNew[i] + ")");
			arrFinalRez.push(" " + "-" + " ");
		}
		return arrFinalRez.slice(0, arrFinalRez.length - 1).join('');
	}
	////////////
	for (let i = 0; i < listOfArt.length; i++) {
		arrLetter.push(listOfArt[i].charAt(0))
	}
	console.log(arrLetter)
	for (let i = 0; i < arrLetter.length; i++) {
		if (arrLetter.indexOf(arrLetter[i]) == i) {
			arrOfUniqueLetters.push(arrLetter[i])
		}
	}
	console.log(arrOfUniqueLetters)

	for (let i = 0; i < arrLetter.length; i++) {
		arrOfObjects.push(arrLetter[i] + ":" + arrNumbers[i])
	}
	console.log(arrOfObjects)

	let newArrOfObjects = [];
	for (let i = 0; i < arrOfObjects.length; i++) {
		let key = arrOfObjects[i].slice(0, 1);
		let val;
		if (arrOfObjects[i].length == 3) {
			val = arrOfObjects[i].slice(2, 3);
			console.log(val)
		}
		if (arrOfObjects[i].length == 4) {
			val = arrOfObjects[i].slice(2, 3) + arrOfObjects[i].slice(3, 4);
		} else {
			val = arrOfObjects[i].slice(2, 3) + arrOfObjects[i].slice(3, 4) + arrOfObjects[i].slice(4, 5);
		}

		let newobj = {};
		newobj[key] = +val;
		newArrOfObjects.push(newobj);
	}
	console.log(newArrOfObjects)
	//////////////////
	let tempArr = [];
	for (let j = 0; j < arrOfUniqueLetters.length; j++) {
		for (let i = 0; i < newArrOfObjects.length; i++) {
			for (let key in newArrOfObjects[i]) {
				if (key == arrOfUniqueLetters[j]) {
					tempArr.push(newArrOfObjects[i][key])
				}
				console.log(acum(tempArr))
			}
		}
		arrOfUniqueNumbers.push(acum(tempArr))
		tempArr.splice(0);
	}
	///////////////
	console.log(arrOfUniqueNumbers)
	console.log(arrOfUniqueLetters)
	console.log(listOfCat)
	console.log(arrLetter)
	/////////////
	for (let i = 0; i < arrOfUniqueLetters.length; i++) {
		for (let j = 0; j < listOfCat.length; j++) {
			if (arrOfUniqueLetters[i] == listOfCat[j]) {
				arrRez.push((arrOfUniqueLetters[i]) + ":" + arrOfUniqueNumbers[i]);
			} else {
				arrRez.push((listOfCat[j]) + ":" + "000");
			}
		}
	}
	console.log(arrRez)
	let newArrOfObjectsSum = [];
	for (let i = 0; i < arrRez.length; i++) {
		let key = arrRez[i].slice(0, 1);
		let val;
		if (arrRez[i].length == 3) {
			val = arrRez[i].slice(2, 3);
		}
		if (arrRez[i].length == 4) {
			val = arrRez[i].slice(2, 3) + arrRez[i].slice(3, 4);
		}
		if (arrRez[i].length == 5) {
			val = arrRez[i].slice(2, 3) + arrRez[i].slice(3, 4) + arrRez[i].slice(4, 5);
		} else {
			val = arrRez[i].slice(2, 3) + arrRez[i].slice(3, 4) + arrRez[i].slice(4, 5) + arrRez[i].slice(5, 6);
		}
		let newobj = {};
		newobj[key] = +val;
		newArrOfObjectsSum.push(newobj);
	}
	console.log(newArrOfObjectsSum)
	///////////
	let arrOfUniqueNumbersNew = [];
	for (let j = 0; j < listOfCat.length; j++) {
		for (let i = 0; i < newArrOfObjectsSum.length; i++) {
			for (let key in newArrOfObjectsSum[i]) {
				if (key == listOfCat[j]) {
					tempArr.push(newArrOfObjectsSum[i][key])
				}
				console.log(acum(tempArr))
			}
		}
		arrOfUniqueNumbersNew.push(acum(tempArr))
		tempArr.splice(0);
	}
	console.log(arrOfUniqueNumbersNew)
	let arrFinalRez = [];

	for (let i = 0; i < arrOfUniqueNumbersNew.length; i++) {
		arrFinalRez.push("(" + listOfCat[i] + " " + ":" + " " + arrOfUniqueNumbersNew[i] + ")");
		arrFinalRez.push(" " + "-" + " ");
	}
	return arrFinalRez.slice(0, arrFinalRez.length - 1).join('');
}

console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]));