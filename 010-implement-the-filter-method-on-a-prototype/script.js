// You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

// TASK

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

Array.prototype.myFilter = function (callback) {
	const newArray = [];
	for (const [index, elem] of this.entries()) {
		if (callback(elem, index, this)) newArray.push(elem);
	}
	return newArray;
};
