//build in data  type : number ,string,boolean,void ,undefine ,null
let userId:number;
let firstname:string;
let lastname:string;
let isActived:boolean;
let fullname:string;

userId=101;
firstname="subrata";
lastname="modak";
isActived=true;
fullname=firstname.concat(lastname);
console.log(`your id :${userId} and full name ${fullname}`);
console.log(fullname.split(" "))
