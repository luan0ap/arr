export default function (arr, cb) {
	var i=0, len=arr.length;

	for (; i < len; i++) {
		if (cb(arr[i], i, arr)) {
			return true;
		}
	}

	return false;
}
