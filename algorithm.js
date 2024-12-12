function binarySearch(arr, item){
    var low = 0;
    var high = arr.length;
    var mid = (high - low) / 2;
    var res = -1;
    while (low < high) {
	mid = Math.floor(mid)
        if (arr[mid] == item )
        {
	        res = arr[mid];
            break;
        }
        else if (item > arr[mid])
        {
            low = mid + 1;
            mid = (high + low) / 2;
        }
        else if (item < arr[mid])
        {
            high = mid - 1;
            mid = (high + low) / 2;
        }
	else {
	    console.log("arr[mid]: " + arr[mid]);
	    console.log("low: " + low + " mid: " + mid + " high: " + high);
	    throw new Error("Should never get here");
	}
    }
    return res;
}

function binarySearch1(arr, item){
    var res = -1;
    var low = 0;
    var high = arr.length;
    var mid = high / 2;

    while (high > low) {
        mid = Math.floor(mid);
        if (item == arr[mid]) {
            res = arr[mid];
            break; 
        }
        else if (item > arr[mid]) {
	    console.log("item: " + item + " low: " + low + " mid: " + mid + " high: " + high);
            low = mid + 1;
            mid = (high + low) / 2;
	    console.log("mid: " + mid);
        }
        else if (item < arr[mid]) {
	    console.log("item: " + item + " low: " + low + " mid: " + mid + " high: " + high);
            high = mid - 1;
            mid = (high + low) / 2;
	    console.log("mid: " + mid);
        }
        else { 
            throw new Error("we should not get here");
        }
    }

    return res;
}

function binarySearch2(arr, item){
    var low = 0;
    var high = arr.length;
    var mid = (high - low) / 2;
    var res = -1;
    while (low < high) {
	// ensure int for arr index
	mid = Math.floor(mid);
        if (item == arr[mid]) {
	    return mid;
	}
        else if (item > arr[mid]) {
	    low = mid + 1;
	    mid = (high + low) / 2; 
	}
        else if (item < arr[mid]) {
	    high = mid - 1;
	    mid = (high + low) / 2; 
	}
	else {
	    throw new Error("thould never get here");
	}
    }
    return -1;
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
    binarySearch1,
    binarySearch2,
    bruteForceSearch
}
