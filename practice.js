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

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
//   // person nesnesi hakkında destructuring kullanmayarak bilgi veren bir fonksiyon oluşturalım
  
//   const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
  
//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
//     return personInfo
//   }
  
//   console.log(getPersonInfo(person))
// try{
//   let lastname='tarlaci';
//   let fullName=firstname+lastname;

// }catch(error){
//   console.log('name of the error',error.name);
//   console.log('Error message',error.message)
// }finally{
//   console.log('in any case I will be executed')
// }

// const throwErrorExample=()=>{
//   let message;
//   let x=prompt('Enter a number: ')
//   try{
//     if(x =='') throw 'empty'
//     if(isNaN(x))throw 'not a number'
//     x=Number(x)
//     if(x<5)throw 'too low'
//     if(x>10)throw 'too high'
//   }catch(err){
//     console.log(err)
//   }
// }

// throwErrorExample()

class Person{
    constructor(firstName,lastName,age,country,city){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.country=country;
        this.city=city
        this.score=0
        this.skills=[]

    }
    getFullName(){
        const fullName=this.firstName+ ' ' +this.lastName
        return fullName;
    }

    get getScore(){
        return this.score;
    }
    get getSkills(){
        return this.skills

    }
    set setScore(score){
        this.score+=score
    }
    set setSkills(skill){
        this.skills.push(skill)

    }
    getPersonInfo(){
        let fullName=this.getFullName()
        let skills=
        this.skills.length>0&&
        this.skills.slice(0,this.skills.length-1).join(', ')+
        ` and ${this.skills[this.skills.length-1]}`
        let formattedSkills=skills? `he knows ${skills}`:''
        let info=`${fullName} is ${this.age}. He lives ${this.city} ${this.country}. ${formattedSkills}`
        return info
    }
}

class Student extends Person{
    saySomething(){
        console.log('I am a child of the person class')
    }
}

const s1=new Student('Asabeneh','Yateyah','Finland',45,'Helsinki');
// console.log(s1)
// console.log(s1.saySomething())
// console.log(s1.getPersonInfo())

class Student extends Person{
    constructor(firstName,lastName,age,country,city,gender){
        super(firstName,lastName,age,country,city);
        this.gender=gender
    }
    saySomething(){
        console.log('I am a child of the person class')
    }
}