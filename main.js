console.log("Test")

import random from './getRandom.js'
console.log(random(), random())

import myData from './myData.json' assert {type: "json"}; 
console.log(myData)

const user = {
  name: 'Nara',
  age: 33,
  emails: [
    'naraya1225@gmail.com',
    'naraya1225@naver.com'
  ]
  
}
console.log('user', user)
const str = JSON.stringify(user)
console.log('str',str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj',obj)