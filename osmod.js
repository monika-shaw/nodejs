    //10
    // const os = require('os');
    // console.log(os.hostname());
    // console.log(os.platform());
    // console.log(os.freemem());
    // console.log(os.tmpdir());
    // console.log(os.type());
//  console.log(os.arch());
 

//  const freememory=os.freemem();
//  //console.log(freememory);
//  console.log(`${freememory/1024/1024/1024}`);

//  const tot=os.totalmem();
//  //console.log(freememory);
//  console.log(`${tot/1024/1024/1024}`);

//11

const path = require('path');
// console.log(path.dirname('C:/Users/Monika Shaw/Desktop/Node/osmod.js'));
// console.log(path.extname('C:\Users\Monika Shaw\Desktop\Node\osmod.js'));
// console.log(path.basename('C:\Users\Monika Shaw\Desktop\Node\osmod.js'));

// console.log(path.parse('C:\Users\Monika Shaw\Desktop\Node\osmod.js'));
// const mypath=path.parse('C:\Users\Monika Shaw\Desktop\Node\osmod.js');
// console.log(mypath.root);



//12
 const add =(a,b) =>{

    return a+b;
}

// module.exports =add;
 const name='tom';

// module.exports =name


const sub =(a,b) =>{

    return a-b;
}

//  module.exports.add =add;
//  module.exports.sub =sub;
module.exports = {add,sub,name}
