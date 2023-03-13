console.log("sanity")

  

  emptyArray = []

  fiveArray = ['hello','there','this','is','day']
  arrayLength = fiveArray.length
  firstItem = fiveArray[0]
  middleItem = fiveArray[Math.floor(arrayLength/2)]
  lastItem = fiveArray[arrayLength-1]
  console.log( firstItem, middleItem, lastItem)

  mixedDataTypes = [{'object':undefined},'string',undefined, 42, 1.21]

  itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
  console.log(itCompanies, `The number of companies in the list is ${itCompanies.length}`)
  firstCompany = itCompanies[0]
  middleCompany = itCompanies[Math.floor(itCompanies.length/2)]
  lastCompany = itCompanies[itCompanies.length-1]
  console.log(firstCompany, middleCompany, lastCompany)
  itCompanies.forEach(e=>console.log(e))

  itCompanies.forEach(e=>console.log(e.toUpperCase()))
  console.log(`${itCompanies.join(', ')} are large tech companies`)
  
  if(itCompanies.includes('Netflix')){
    console.log('Netflix found')
  }else{
    console.log('Company not found')
  }

  filteredItCompanies = []
  itCompanies.forEach(e=>{
    if(e.includes('oo')){
        
    }else{
        filteredItCompanies.push(e)
    }
  })
  console.log(filteredItCompanies)

  sortedItCompanies = itCompanies.sort()
  console.log(sortedItCompanies)
  reversedItCompanies = itCompanies.reverse()
  firstThreeCompanies = itCompanies.slice(0,3)
  lastThreeCompanies = itCompanies.slice(itCompanies.length-3, itCompanies.length)
itCompanies.splice(Math.floor(itCompanies.length/2),1)
console.log(itCompanies)

//LEVEL 2
console.log(countries)
console.log(webTechs)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
lessPunc = text.replace(/[,.]/g, '')
console.log(lessPunc, lessPunc.split(' ').length)

const shoppingCart = ['Milk','Coffee','Tea','Honey']

if (shoppingCart.indexOf('Meat') == -1){
  shoppingCart.unshift('Meat')
}
console.log(shoppingCart)
if(shoppingCart.indexOf('Sugar')==-1){
  shoppingCart.push('Sugar')
}
console.log(shoppingCart)
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart)

if(countries.indexOf('Ethiopia')!=-1){
  console.log(countries[countries.indexOf('Ethiopia')].toUpperCase())
}else{
  countries.push('Ethiopia')
}

if(webTechs.indexOf('Sass')!=-1){
  console.log('Sass is a CSS preprocess')
}else{
  webTechs.push('Sass')
  console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//LEVEL 3
