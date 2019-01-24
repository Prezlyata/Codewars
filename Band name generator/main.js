function bandNameGenerator(str) {
	console.log(str.charAt(str.length))
	if(str.charAt(0)  == str.charAt(str.length-1)){
		let retorno = (str.charAt(0).toUpperCase()+ str.slice(1))
		let secondWord = str
		secondWord = secondWord.replace(secondWord.charAt(0),'');
		return(retorno+secondWord)
	}else{
		let retorno = "The "
		retorno = retorno+str.charAt(0).toUpperCase()+ str.slice(1) 
		return (retorno)
	}
}