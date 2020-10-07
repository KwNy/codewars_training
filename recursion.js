function power(base, exp){
    
    if(exp === 0) {
        return 1
    }
    
    return base * power(base, exp-1)
}


function factorial(num){
    if(num === 1 || num === 0){
        return 1
    }
    
    return num* factorial(num-1)
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
    
    if(arr.length === 0){
        return 1
    }
    
   
    
    return arr[0]*productOfArray(arr.slice(1)) 
}
function recursiveRange(num){
    if(num === 1){
        return 1
    }
    
    return num+recursiveRange(num -1)
   
}
