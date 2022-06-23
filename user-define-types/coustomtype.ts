let users:object[];
users=[];
let user1:{userName:string;userId:number};
user1={userName:"subrata",userId:105};
users.push(user1);
let user2:{userName:string;userId:number};
user2={userName:"sehab hassain",userId:160};
users.push(user2);
for(const key in users){
    console.log(users[key]);
}