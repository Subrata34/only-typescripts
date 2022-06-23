let users:object[];
users=[];
type user={userName:string;userId:number};
let user1:user;
user1={userName:"subrata",userId:105};
users.push(user1);
let user2:user;
user2={userName:"sehab hassain",userId:160};
users.push(user2);
for(const key in users){
    console.log(users[key]);
};