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

//let updatedUsers = users.map(update);

// console.log(updatedUsers, "update age");
users.push({ name: "Noor", age: 27 });

// console.log(users);

let myIds = [];

users.forEach((item) => {
  myIds.push(item.age);
});
console.log(myIds, "my ides");

let filteredUsers = users.filter((item) => {
  return item.name != "Ahmed";
});

let deleteItem = (selectedId) => {
  let fitlerUsers = users.filter((item) => {
    return item.id != selectedId;
  });
  users = fitlerUsers;
};

deleteItem("33");
console.log(users, "filtered users");
