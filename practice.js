// const numbers=[1,2,3,4];
// let [numONe,numTwo,numThree,numFour]=numbers;

// console.log(numONe,numTwo,numThree,numFour);

// const names=['Ali','ahmet','yunus','ilyas'];
// let [nameOne,nameTwo,nameThree,nameFour]=names;
// console.log(nameOne,nameTwo,nameThree,nameFour)
// console.log(nameOne,nameFour);

// const fullStack=[
//     ['javscript','html','css','react'],
//     ['nodejs','sql','express']
// ]
// let [frontEnd,backEnd]=fullStack;
// console.log(frontEnd,backEnd)

// const numbers=[1,2,3,4]
// let [num1,num2]=numbers
// console.log(num2,num1)

// 
// const countries=[['Turkey','Ankara'],['Iran','Tehran'],['Ozbekistan','Taskent']];
// for(const[country,capital] of countries){
//     console.log(country,capital)
// }

// const fullStack=[
// ['Html','Css','Javascript'],
// ['NodeJs','Express','MangoDB']
// ]

// for(const[frontend,backEnd]of fullStack){
//     console.log(frontend,backEnd)
// }

// const rectangle={
//     width:20,
//     height:10,
//     area:200,
//    // perimeter:50
// };
// let {width,height,area,perimeter}=rectangle;
// console.log(width,height,area,perimeter)

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }
  // person nesnesi hakkında destructuring kullanmayarak bilgi veren bir fonksiyon oluşturalım
  
  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
      obj.age
    } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  
  console.log(getPersonInfo(person))