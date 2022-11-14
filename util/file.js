const fs=require('fs');

function readFileSync(filename){
    let readData="";
    readData=fs.readFileSync(filename,'utf-8');
    if (readData==""){
        console.log("Read empty file using readFileSync");
    }
    return readData;
}

function writeToFile(data){
    fs.writeFile('mytasks.txt',data,{flag:"a"},(err)=>{
        if(err) { return new Error("error in writeToFile "+__dirname)}
    })
}

module.exports={

    readFileSync,
    writeToFile

}