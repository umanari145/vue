function Utility() {

	this.divNum = function(str) {
		if (str !== '' && str !== undefined && isNaN(str) === false) {
			return true;
		} else {
			return false;
		}
	}
}
