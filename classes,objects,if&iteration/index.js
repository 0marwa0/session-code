let user = {
  firstName: "Ahmed",
  "building no": "404",
};
delete user["building no"];
user.lastName = "Jhon";
// console.log("lastName" in user);

let login = undefined; // false

// if (login) {
//   console.log("he is logined in");
// } else if (login == true) {
// } else {
//   console.log("he is not logined in");
// }

// create a function to give the avg of 3 marks and
// shows a massage of passed (avg is form 50 to 60),
// failed (under 50)
// above 80 show very good!

// let country = "UAE";
// let age = 19;
// if (country == "UAE" && age == 20) {
//   console.log("both conditions are true");
// }
// if (country == "UAE" || age == 20) {
//   console.log("one of them true or both");
// }

// switch (theme) {
//   case "light":
//     document.documentElement.style.setProperty("--main-color", "red");
//     break;
//   case "dark":
//     document.documentElement.style.setProperty("--main-color", "black");
//     break;
//   case "light-dark":
//     document.documentElement.style.setProperty("--main-color", "redx");
//     break;
//   case "light-dark":
//     document.documentElement.style.setProperty("--main-color", "redx");
//     break;
//   default:
//     document.documentElement.style.setProperty("--main-color", "whit");

//     console.log(" defult case");
//     break;
// }

// let data = [
//   { name: "Ahemd", age: 30 }, //0
//   { name: "Ali", age: 60 }, // 1
//   { name: "jhon", age: 77 }, // 2
// ];
// for (let i = 0; i < data.length; i++) {
//   let user = data[i];
//   console.log(user, i);
// }

// let count = 0;
// do {
//   console.log(count);
//   count++;
// } while (count < 10);

// while (count < 4) {
//   console.log(count);
//   count++;
// }

// class cal {
//   constructor(value) {
//     this.method = value;
//   }

//   getMethod() {
//     return this.method + "from the method";
//   }
// }

// let cal1 = new cal("Add");
// console.log(cal1.getMethod());

class Animal {
  constructor(value) {
    this.name = value;
  }

  eat() {
    return `this ${this.name} is eating x`;
  }
}
class Dog extends Animal {
  bark() {
    return `this ${this.name} is barkking`;
  }
}
let myDog = new Dog("Boby");
console.log(myDog.bark());
