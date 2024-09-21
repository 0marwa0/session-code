let re = /hi/i;

let result = re.test("HI everyone");
console.log(result);
let text = "Hi everyone and hi there, hI";

let restult2 = text.match(/hi/g);

let phone = "+1-(408)-555-0105";
let result3 = phone.match(/\d{2}/);
console.log(result3.join(""));
