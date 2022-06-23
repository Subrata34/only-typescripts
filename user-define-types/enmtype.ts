//duplicate value is not here 
//enm types numeric ,string,htergenous
enum RequestType{
    readData=1,
    saveData,
    delateData
}
console.log(RequestType);

//string enm value 

enum Requestdata{
    readData="readData",
    deleatedata="deletdata",
    savedata="savedata"
}
console.log(Requestdata.readData);