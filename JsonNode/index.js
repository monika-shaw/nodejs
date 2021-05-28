//18

// const bioData ={
//     name : "tom",
//     age : 26,

// }
//console.log(bioData.name);


// to convert into json
//const jsonData =JSON.stringify(bioData);

//console.log(jsonData);
//console.log(jsonData.age);


// const objData= JSON.parse(jsonData);
// console.log((objData));
// console.log((objData.age));


// 1.conver to JSON
// 2.add into another file
// 3.read file and again convert back to js obj 
// 4.show to console.log

const bioData ={
         name : "tom",
         age : 26,
    
     };
const jsonData =JSON.stringify(bioData);

 const fs = require('fs');
// fs.writeFile('one.json',jsonData,(err)=>{
//     console.log("File created");
// })


fs.readFile('one.json','utf8',(err,data)=>{
    console.log("Datas are:",data);


    const orgData = JSON.parse(data);
    console.log(orgData);

});





