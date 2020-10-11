https://www.codewars.com/kata/5b6db1acb118141f6b000060/train/javascript

function recycle(arr) {

  let organic = []

  let filteredAPaper = arr.filter((el,indx)=> {

    if(el.material === 'paper' || el.secondMaterial === 'paper'){
  
      return el
    }
  }).map( (el) => {return el.type})

  let filteredGlass = arr.filter((el,indx)=> {

    if(el.material === 'glass' ||el.secondMaterial === 'glass'){
  
      return el
    }
  }).map( (el) => {return el.type})


  let filteredOrganic = arr.filter((el,indx)=> {

    if(el.material === 'organic' ||el.secondMaterial == 'organic'){
  
      return el
    }
  }).map( (el) => {return el.type})


let filteredAPlastic = arr.filter((el,indx)=> {

    if(el.material === 'plastic' || el.secondMaterial == 'plastic'){
  
      return el
    }
  }).map( (el) => {return el.type})

return [filteredAPaper
, filteredGlass, filteredOrganic,filteredAPlastic ]
}
