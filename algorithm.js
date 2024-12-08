function binarySearch(arr, item){
    for(let i = 0; i < arr.length; i++) {
     
    }
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
