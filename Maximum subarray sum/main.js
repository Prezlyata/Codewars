var maxSequence = function(arr){
	var min = 0, ans = 0, i, sum = 0;
	for (i = 0; i < arr.length; ++i) {
		sum += arr[i];
		min = Math.min(sum, min);
		ans = Math.max(ans, sum - min);
	}
	return ans;
}