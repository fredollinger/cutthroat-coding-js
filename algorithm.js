function binarySearch(arr, item){
    var low = 0;
    var high = arr.length;
    var mid = (high - low) / 2;
    while (low < high) {
	console.log("low: " + low + " mid: " + mid + " high: " + high);
        if (arr[mid] == item )
        {
            break;
        }
        else if (item > arr[mid])
        {
            low = mid;
            mid = low + (high - low) / 2;
        }
        else if (item < arr[mid])
        {
            high = mid;
            mid = (high - low) / 2;
        }
	else {
	    console.log("arr[mid]: " + arr[mid]);
	    console.log("low: " + low + " mid: " + mid + " high: " + high);
	    throw new Error("Should never get here");
	}
    }
    return mid;
}

function bruteForceSearch(arr, item){
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            console.log(arr[i]);
	        return i;
	    }
    }
    return -1;
}

module.exports = {
    binarySearch,
    bruteForceSearch
}
