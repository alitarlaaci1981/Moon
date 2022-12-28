import fetch from 'node-fetch'
// const fetch=require('node-fetch')
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'Redux',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }

//   const txt = JSON.stringify(users,undefined,2)
//   console.log(txt)

//
// const doPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const skills=['Html','Css','JS'];
//         if(skills.includes('CSS')){
//             resolve("Fullstack developer")
//         }else{
//             reject('something is not right')
//         }
//     },2000)
// })

// doPromise
// .then(result=>{
//     console.log(result)
// })
// .catch(error=>console.log(error))

// const url='https://restcountries.com/v2/all'
// fetch(url)
// .then(response=>response.json())
// .then(data=>{
//     console.log(data[0])
// })
// .catch(err=>console.log(err))

// const url='https://restcountries.com/v2/all';
// fetch(url)
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)
// })
// .catch(error=>console.log(error))

// const fetchData=async()=>{
//     try{
//         const response=await fetch('https://restcountries.com/v2/all')
//         const countries=await response.json();
//         console.log(countries)
//     }catch(err){
//         console.error(err)
//     }
// }

// console.log('======= async and await')

// fetchData()

// const url='https://restcountries.com/v2/all'

// const fetchData=async () =>{
//     try{
//         const response=await fetch(url);
//     const countries=await response.json()
//     console.log(countries)
//     }catch(err){
//         console.error(err)
//     }

// }

// fetchData()

function outerFunction () {
  let count = 0
  function plusOne () {
    count++
    return count
  }
  function minuesOne () {
    count--
    return count
  }
  return {
    plusOne: plusOne(),
    minuesOne: minuesOne()
  }
}
const innerfuncs = outerFunction()
console.log(innerfuncs.plusOne)
console.log(innerfuncs.minuesOne)
