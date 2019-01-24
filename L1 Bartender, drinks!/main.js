function getDrinkByProfession(param){
	var paramCase = param.toLowerCase();
	switch(paramCase) {
		case "jabroni":
			return "Patron Tequila"
			break;
		case "school counselor":
			return "Anything with Alcohol"
			break;
		case "programmer":
			return "Hipster Craft Beer"
			break;
		case "bike gang member":
			return "Moonshine"
			break;
		case "politician":
			return "Your tax dollars"
			break;
		case "rapper":
			return "Cristal"
			break;
		default:
			if(paramCase.length > 0) {
				return "Beer"
			}
		break;
	}     
}