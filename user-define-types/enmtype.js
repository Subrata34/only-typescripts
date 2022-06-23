//duplicate value is not here 
//enm types numeric ,string,htergenous
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["delateData"] = 3] = "delateData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//string enm value 
var Requestdata;
(function (Requestdata) {
    Requestdata["readData"] = "readData";
    Requestdata["deleatedata"] = "deletdata";
    Requestdata["savedata"] = "savedata";
})(Requestdata || (Requestdata = {}));
console.log(Requestdata.readData);
