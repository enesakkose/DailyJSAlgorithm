function diffArray(arr1, arr2) {
    const union = []

    for(let i = 0; i < arr1.length; i++){
        if(!union.includes(arr1[i])) {
            union.push(arr1[i])
        } 
    }
    for(let i = 0; i < arr2.length; i++){
        if(!union.includes(arr2[i])) {
            union.push(arr2[i])
        } 
    }
    
    const symDiff = []

    for(let i = 0; i < union.length; i++){
        const currentEl = union[i]
        if(arr1.includes(currentEl) && !arr2.includes(currentEl)){
            symDiff.push(currentEl)
        } else if(arr2.includes(currentEl) && !arr1.includes(currentEl)) {
            symDiff.push(currentEl)
        }
    }
    return symDiff
}

console.log(diffArray([1,2,3,4,5,6], [1,3,5,7,9]))