let users = [
  { name: "Jhon", age: 33, id: "111" },
  { name: "Ahmed", age: 46, id: "22" },
  { name: "user", age: 33, id: "33" },
  { name: "test", age: 46, id: "44" },
];

// function printmsg() {}
// function (){
// }

// first use case: reformat the initial array
function getName(user) {
  let { name } = user;
  // return user.name
  // return { ...user, school: "tmc" };
  return { name, school: "tmc" };
}
let onlyNames = users.map(function (user) {
  return user.name;
});
let onlyNames2 = users.map(getName);

console.log(onlyNames2);
// console.log(onlyNames);

// let user = { userName: "Ahmed", age: 66 };
// let { userName, age } = user;

// console.log(userName, age);

// second use case: updating an array

function update(user) {
  if (user.name == "Ahmed") {
    return { age: 100 };
  } else {
    return user;
  }
}

users.push({ name: "Noor", age: 27 });

// console.log(users);

let myIds = [];

users.forEach((item) => {
  myIds.push(item.age);
});
console.log(myIds, "my ides");

// let filteredUsers = users.filter((item) => {
//   return item.name != "Ahmed";
// });

///////////////////////////////// update element using map ///////////////////////////////
function updateUser(user) {
  let seletctedId = 123;
  if (user.id == seletctedId) {
    return { age: 100 };
  } else {
    return user;
  }
}
let updatedUsers = users.map(update);
console.log(updatedUsers, "update age");
///////////////////////////////// removing element using map ///////////////////////////////

let removeItem = (item) => {
  let selectedId = "123";
  return item.id != selectedId;
};
let fitlerUsers = users.filter(removeItem);
users = fitlerUsers;
console.log(fitlerUsers, "filtered users");

////////////////////////////// reduce //////////////////
// let years = users.map(function (x, index) {
//   console.log(x, index, "single item in users array");
// });
let nums = [22, 44, 55, 77];

let add = (y, x, i) => {
  let res = y + x;
  console.log(res, i);
  return res;
};
let totalYears = nums.reduce(add, 0);
// console.log(totalYears, "total years");
// 22;
// 66;
