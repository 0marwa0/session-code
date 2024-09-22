let getUsers = () => {
  let users = [
    { name: "Ali", age: 22 },
    { name: "Ahmed", age: 22 },
  ];
  // setTimeout(() => {
  //   users = [
  //     { name: "Ali", age: 22 },
  //     { name: "Ahmed", age: 22 },
  //   ];
  // }, 4000);

  return users;
};

function showResult(users) {
  users.forEach((element) => {
    let div = document.createElement("div");
    div.textContent = element.name;
    document.body.appendChild(div);
  });
}
function showError(msg) {
  alert(msg);
}

function findUser(userName) {
  let data = [];
  let result = new Promise((res, rej) => {
    // my api call that will cost time
    let users = getUsers();
    //let users = undefined;

    // check if I got data or not
    if (users) {
      // if this res get exucted then the .then will be running
      res(users);
    } else {
      // if this rej get excuted then the .catch will be runnning
      rej("Something wrong happen in the api call");
    }
  });
  result.then(showResult).catch(showError);
  // return data;
}
console.log(findUser("Ahmed"));

/////////// write the same function but with asyn/await

async function findUserAsync(userName) {
  try {
    let users = await getUsers();
    showResult(users);
  } catch (error) {
    showError("Something wrong happen in the api call");
  }
}

/// fetch data from an api
let api = fetch("https://fakestoreapi.com/products/5")
  .then((x) => x.json())
  .then((res) => {
    console.log(res);
  })
  .catch((x) => console.log(x));
console.log(api);
