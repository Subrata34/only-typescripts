//duplicate value is not here 
//enm types numeric ,string,htergenous
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["delateData"] = 3] = "delateData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
