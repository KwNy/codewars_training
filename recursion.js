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

function fib(num){
  // add whatever parameters you deem necessary - good luck!  
  
  if(num === 1 || num ===2) {
      return 1
  }
  
  return fib(num-1) +fib(num-2)
}

function reverse(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length === 1){
      
      return str
      
  }
  
  return reverse(str.slice(1))+str[0]
  
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function isPalindrome(word){
  // add whatever parameters you deem necessary - good luck!
  if(word.length === 1){
      return true
  }else {
      let lastChar = word[word.length -1]
      let firstChar = word[0]
      
      if(lastChar !== firstChar) {
          return false
      }
      
      
  }
  
  return isPalindrome(word.slice(1,-1))
  
 
}

function someRecursive(arr, cb){
  // add whatever parameters you deem necessary - good luck!
  
  if(arr.length === 0){
      return false
  }
  
  
  if(cb(arr[0]) ){
     
      return true
  }
  
 return someRecursive(arr.slice(1), cb)
}
