//for each vs map
// for each works on each element individully

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// map returns an array and works on each element 
const testArr = [
    {
        bootCampName:"Front End react",startDate:'2/15/2020',instructorName:'Sachin Rajgire', students: 2,
        schedule:{
    startTime:"6.30PMEST",
    endTime:"11.30PMEST"
    }},
    {bootCampName:"Data Analyst",startDate:'2/15/2020',instructorName:'Messi', students: 14,
    schedule:{
    startTime:"6.30PMEST",
    endTime:"11.30PMEST"
    }},
    {bootCampName:"Full Stack Developer",startDate:'2/25/2020',instructorName:'John Doe', students : 5,
    schedule:{
    startTime:"5.30PMEST",
    endTime:"11.30PMEST"
    }},
    ]

    // map over it and get the three arguments that comes with it

    let res = testArr.map((one,two,three)=>{
         console.log(three, 'three');

    })

    // for each record, add is valid : true
    let res1 = testArr.map((i)=>{
        let newOne = { ... i, Valid:true}
        return newOne;

   })
   console.log(res1, "RESULT");

   // map is iterating over the array 
   // it is a callback function 
   // must return or youll get a warning :( 

//filter is also used alot returns an array
let res2 = testArr.filter((i)=>{
    //let newOne = { ... i, bootCampName.contains("react")}
    if (i.bootCampName.includes('react')){
    return true;
    }else{
        return false;
    }
})
console.log(res2, "bootcampreact");

let res3 = testArr.filter((i)=>{
    //let newOne = { ... i, bootCampName.contains("react")}
    if (i.students > 5){
    return true;
    }else{
        return false;
    }
})
console.log(res3, "students");

// sorting 
// given an arrary sort is acsending order

let arr12 = [ 1, 10,44,3,2,8];

let arr13 = arr12.sort((a,b) => a-b);
console.log(arr13);

let arr14 = ["jan", "feb", " december"];
let arr15 = arr14.sort((a,b) => a-b);
console.log(arr15);

// need to be mindful of cases ... change everything to lowercase
let arrT1 = testArr.sort((a,b)=>{
    let name1 = a.bootCampName.toUpperCase()
    let name2 = b.bootCampName.toUpperCase()
if( name1 < name2){
    return -1
} else{
    return 1
}
});
console.log(arrT1);


// 