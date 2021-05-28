//5
//const fs = require('fs');
//creating a new file
// fs.writeFileSync("read.txt","Welcome to my channel");
// fs.writeFileSync("read.txt","Welcome to my channel, Good morning");

// fs.appendFileSync('read.txt',"My name is tom");


//read data of another file
// const b_data=fs.readFileSync('read.txt');
// console.log(b_data); // o/p <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 2c 20 47 6f 6f 64 20 6d 6f 72 6e 69 6e 67 4d 79 20 6e 61 6d 65 20 69 73 20 74 6f 6d>


// data=b_data.toString();
// console.log(data);

// to renME THE FILE

// fs.renameSync('read.txt','readwrite.txt');

//6

   //const fs = require('fs');

// fs.mkdirSync('Tests');

 //fs.writeFileSync('Test/bio.txt','My name is Nodejs');
  //fs.appendFileSync('Test/bio.txt','Welcome');

//   const data=fs.readFileSync('Test/bio.txt',"utf8")
//   console.log(data);



// fs.renameSync('Test/bio.txt','Phy.txt');

// delete a file

//fs.unlinkSync('Test/phy.txt');

//delete folder
// fs.rmdirSync('Tests');

//7

//  const fs = require('fs');

// fs.writeFile('read.txt','Today is rainy day',
// (err)=> {
//    console.log(("File is created"));
//    console.log(err);
// }
// );


// fs.appendFile('read.txt','Boring day',(err) => {
//    console.log("task completed");
// });

// fs.readFile("read.txt","utf8" ,(err, datas) => {
//    console.log("Read successfully",datas);
// })

//8
// const fs = require('fs');

// const data=fs.readFileSync('read.txt','utf-8');
// console.log(data);
// console.log("after the data");


// fs.readFile("read.txt","utf8" ,(err, datas) => {
//       console.log("Read successfully",datas);
      
//     });
//     console.log("after the data");


//9

const fs = require('fs');

// fs.mkdir('Test',(err) => {
//    console.log("Folder created");
// });

// fs.writeFile('Test/bio.txt',"I am fool",(err) => {
//    console.log("File created");
   
// });

// fs.appendFile("Test/bio.txt", "not exactly",(err)=>{
//    console.log("Appended");
// });

// fs.readFile("Test/bio.txt","utf8",(err,data)=>{
//    console.log("Data read",data);
// });

// fs.rename("Test/bio.txt","Test/first.txt",(err)=>{
//    console.log("file renamed");
// });

// fs.unlink("Test/first.txt",(err)=>
// {
//    console.log("file deleted");
// });

// fs.rmdir("Test",(err)=>{
//    console.log("FOlder deleted");
// });

//12
// const opr = require('./osmod');

//   console.log(opr.add(5,5));
//   console.log(opr.sub(10,8));
// console.log(add);


const {add, sub,name} = require('./osmod');

  console.log(add(5,5));
  console.log(sub(10,8));
  console.log(name);





















