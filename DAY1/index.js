function sumAll(arr) {
    let min
    let max

    if(arr[0] > arr[1]){
        min = arr[1]
        max = arr[0]
    } else {
        min = arr[0]
        max = arr[1]
    }

    let sum = 0

    for (let i = min; i <= max; i++) {
        sum += i
    }
    

    return sum
}

console.log(sumAll([1,4]))