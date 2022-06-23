var users;
users = [];
var user1;
user1 = { userName: "subrata", userId: 105 };
users.push(user1);
var user2;
user2 = { userName: "sehab hassain", userId: 160 };
users.push(user2);
for (var key in users) {
    console.log(users[key]);
}
;
var r4equest;
r4equest = "get";
function requesthandle(requestType) {
    console.log(requestType);
}
requesthandle("get");
