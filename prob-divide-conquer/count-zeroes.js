function countZeroes(arr) {
    let low = 0
    let high = arr.length - 1
    while ( low <= high ){
        let midIndex = Math.floor((low + high) / 2);
        if (arr[midIndex] === 0){
            high = midIndex - 1;
        }
        else{
            low = midIndex + 1;
        }
    }
    if (low < arr.length) {
        return arr.length - low;
    } else {
        return 0;
    }
}

module.exports = countZeroes