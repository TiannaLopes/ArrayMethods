const data = require('./Student_Data.json');
/// import Student from '/Student_Data.json';
//console.log(data, 'data');

// write a function to add a new object in the end using rest/spread. return new array
//added:true



//write a function to add an additional property in each item of data 


 // for each record, add is valid : true
//  let res1 = data.map((i)=>{
//     let newOne = { ... i, isStudent:true}
//     return newOne;

// })
// console.log(res1, "RESULT");

// write a function to add the following property 


// Task 
//Write a function to add a new object, in the end , using rest/spread. Return new array.Object can be anything.  {added:true}

// Task 
//Write a function to add an additional property in each item of data.  Add {isStudent:true} 

// Task 
//Write a function to add following property {isStudent:true } only to records where university_name field contains parameter that is passed in  , else add {isStudent:false} in all other records . Return new array.
// argument ( Maryland) 
//field :university_name


// Task
//Sort records in such a way that records with the same employer name should come one after another.Grouping the same records together.


// Task 
//Write a function to return filtered records for the search word that is passed in as the first argument. If the second argument is not present, search all fields. 
// If the second argument is passed, that will be the name of fields in an object that needs to be searched. Search only in that field.  If the second argument is a string then search only that field that is passed.
// If it's an array of fields, Search all those fields. If passed in the string has an invalid field name. Throw error stating that “No field matched”  
// If the second argument is an array and one of the fields has an invalid field name. Ignore that field and continue searching with the rest of the argument 
// Return only records that contain search keywords 
// Search needs to be case insensitive

// Task 
//Sort records using the following fields  
//First sort by graduation_year ( more recent comes on top )
//Second sort by Job Start Date ( more recent comes on top ) 
//Final sort by the employer ( A to Z )



// let sortResult = data1;
// .sort((a,b)=>{
// if (a.Graduation_Year < b.Graduation_Year){
//     return -1
// }else if (a.Graduation_Year > b.Graduation_Year){
//     return 1
// }
// });

// .sort((a,b)=>{
// return a.Job_Start_Data - b.Job_Start_Date;
// })

// .sort((a,b)=>{
// return a.Employer - b.Employer;
// })
//console.log(sortResult);




// Task 
//Write a function to remove records that contain passed in the keyword.
//Search all fields.Return an object {removed_records:[ ] ,remaining records:[ ] , original records: [ ],records_changed:2 }

const data1 = [... data]
//console.log(data1);

const kw = 'Maryland'

let sortMaryland = data1
.filter((i=>{
    if(i.University_Name.toLowerCase().includes(kw.toLowerCase())){
        return true
    }
    if(i.Specialization.toLowerCase().includes(kw.toLowerCase())){
        return true
    }
    if(i.Employer.toLowerCase().includes(kw.toLowerCase())){
        return true
    }
    if(i.Job_Title.toLowerCase().includes(kw.toLowerCase())){
        return true
    }
    return false
}))

console.log(sortMaryland.slice(), 'firstSort');

let excludeSort1 = data1
.filter((i=>{
    if(i.University_Name.toLowerCase().includes(kw.toLowerCase())){
        return false
    }
    if(i.Specialization.toLowerCase().includes(kw.toLowerCase())){
        return false
    }
    if(i.Employer.toLowerCase().includes(kw.toLowerCase())){
        return false
    }
    if(i.Job_Title.toLowerCase().includes(kw.toLowerCase())){
        return false
    }
    return true
}))

// console.log(excludeSort1.slice(), 'firstSort');

//note
let obj = {
    University_Name: 'University of Maryland - A. James Clark School of Engineering',
    Specialization: 'Robotics',
    Graduation_Year: 2020,
    Employer: 'Rivian',
    Job_Title: 'Automation Software Engineer',
    Job_Start_Date: '12/1/2020',
    Career_Url: 'https://rivian.com/careers'
}
Object.keys(obj) // takes the keys and puts them into an array
Object.values(obj).join("") //
Object.entries(obj) //

// how to iterate over an object

// for (let key in obj){
// console.log(key,'KEY')
// console.log(obj[key],'VALUE')
// if(obj[key].includes('Software')){
//     count++
// }
// }

// practice looping over an object 
//take length of value if over 20 print if under dont
function iterateOBJ (){
    for (let key in obj){
    //console.log(key,'KEY')
    //console.log(obj[key],'VALUE')
    if(obj[key].length > 20){
       console.log('Over 20 for sure')
    }else{
       console.log('false')
    }
    } }
    iterateOBJ();



// function SearchRecord1('analyst'){
//     // since no second or third argument, search all fields 
    
// }
// let res2 = testArr.filter((i)=>{
//     //let newOne = { ... i, bootCampName.contains("react")}
//     if (i.bootCampName.includes('react')){
//     return true;
//     }else{
//         return false;
//     }
// })
// console.log(res2, "bootcampreact");
// function SearchRecord2('analyst', 'specialization'){
//     // first for analyst only in specialization field  

// }
// function SearchRecord3('analyst', 'specialization', 'university_name'){
//     // first for analyst only in specialization field  from university name 

// }

