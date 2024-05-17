function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    let pivot = left;
    left = 0;
    right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let adjustedMid = (mid + pivot) % arr.length;
        
        if (arr[adjustedMid] === num) {
            return adjustedMid;
        } else if (arr[adjustedMid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}


module.exports = findRotatedIndex