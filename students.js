const data = require('./Student_Data.json');
/// import Student from '/Student_Data.json';
//console.log(data, 'data');

//Task 1
//Write a function to add following property {isStudent:true } only to records where university_name field contains parameter that is passed in  , else add {isStudent:false} in all other records . Return new array.
//argument ( Maryland)
//field :university_name


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

console.log(excludeSort1.slice(), 'firstSort');


//Task 
// Sort records using the following fields
// First sort by graduation_year ( more recent comes on top )
// Second sort by Job Start Date ( more recent comes on top )
// Final sort by the employer ( A to Z )
 let sortResult = data1
.sort((a,b)=>{
if (a.Graduation_Year < b.Graduation_Year){
    return -1
}else if (a.Graduation_Year > b.Graduation_Year){
    return 1
}})
.sort((a,b)=>{  
    var dateA = new Date(a.Job_Start_Data).getTime();
    var dateB = new Date(b.Job_Start_Date).getTime();
    return dateA > dateB ? 1 : -1;  
}) 
.sort((a,b)=>{
return a.Employer - b.Employer;
})
console.log(sortResult);


//Task
//Write a function to return filtered records for the search word that is passed in as the first argument. If the second argument is not present, search all fields.
//If the second argument is passed, that will be the name of fields in an object that needs to be searched. Search only in that field.  If the second argument is a string then search only that field that is passed.
//If it’s an array of fields, Search all those fields. If passed in the string has an invalid field name. Throw error stating that “No field matched” 
//If the second argument is an array and one of the fields has an invalid field name. Ignore that field and continue searching with the rest of the argument
//Return only records that contain search keywords
//Search needs to be case insensitive


    // since no second or third argument, search all fields 
function searchRecord('analyst', i){  
        if (i.University_Name.includes('analyst')){
        return true;
        }else if(i.Specialization.includes('analyst')){
            return true;
        }else if(i.Employer.includes('analyst')){
            return true;
        }else if(i.Job_Title.includes('analyst')){
            return true;
        }else if(i.Job_Start_Date.includes('analyst')){
             return true;
        // }else if(i.Career_URL.includes('analyst')){
        //     return true;
        }return false;
    }
console.log(searchRecord);

function SearchRecord ('analyst' ,'specialization' ,'university_name'){
    Since second argument there, search in that that field only 
    // Search all for ananlyst only in specialization field 
}


function SearchRecord ('analyst',['specialization' ,'university_name']){
    //Ssince no second or third argument , 
    // Search all for ananlyst only in specialization field 
}

function (a, b, c ) {


}

//Task
//Write a function to remove records that contain passed in the keyword.Search all fields.
//Return an object {removed_records:[ ] ,remaining records:[ ] , original records: [ ],records_changed:2 }
//Records_changed : removed_records.length