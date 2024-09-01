// let x = 10;

function printX() {
  if (true) {
    var x = 10;
  }
  console.log(x, "print x");
}
function hash(password) {
  return "fahlhfafhl" + password + "hafahfahlfkaw";
}
function printY() {
  let y = 100;
  y = 99;
  return y;
}

function login(obg) {
  let hashedPass = hash(obg.password);
  function genrateToken() {
    let result = hashedPass;
    return {
      token: hash(obg.passowrd),
    };
  }
  return genrateToken();
}
console.log(hash("123ghlsgg"));
