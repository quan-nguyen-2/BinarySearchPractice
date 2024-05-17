function sortedFrequency(arr, num) {
    function findFirst(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        let first = -1;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if (arr[mid] === num) {
                first = mid;
                high = mid - 1;  // Search on the left side for the first occurrence
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return first;
    }
    
    function findLast(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        let last = -1;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if (arr[mid] === num) {
                last = mid;
                low = mid + 1;  // Search on the right side for the last occurrence
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return last;
    }
    
    const firstIndex = findFirst(arr, num);
    if (firstIndex === -1) {
        return -1;  // The number is not present in the array
    }
    
    const lastIndex = findLast(arr, num);
    return lastIndex - firstIndex + 1;
}



module.exports = sortedFrequency