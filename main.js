setTimeout(function () {}, 3000)



const uesrAge = {
  name: 'Naraya',
  age: 33
}

const  userEmail = {
  name: 'NaraSimon',
  email: 'naraya1225@gmail.com'
}



const target = Object.assign(uesrAge,userEmail)
console.log(uesrAge)
console.log(userEmail)
console.log(target)
console.log(target === uesrAge)

const a = {k:123}
const b = {k:123}
console.log(a === b)