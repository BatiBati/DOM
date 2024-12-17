// const parent = document.getElementById("parentDiv");
// const p_tag = document.createElement("p");
// p_tag.innerHTML = "Created P tag";

// document.getElementById("parentDiv").appendChild(p_tag);

// const new_element = document.createElement("div");
// new_element.innerHTML = "Replaced element";

// document.getElementById("parentDiv").replaceChild(new_element, p_tag);

// new_element.style.color = "green";
// new_element.style.fontSize = "60px";

// const input = document.createElement("input");
// document.getElementById("parentDiv").appendChild(input);

// new_element.addEventListener("mouseenter", () => {
//   new_element.style.color = "red";
// });
// new_element.addEventListener("mouseout", () => {
//   new_element.style.color = "green";
// });
// new_element.addEventListener("click", () => {
//   console.log("clicked");
// });
//--------------//--------------//--------------//--------------//----
/* const loginForm = document.getElementById("Login");
loginForm.style.display = "flex";
loginForm.style.flexDirection = "column";
loginForm.style.justifyContent = "center";
loginForm.style.alignItems = "center";
const pTag = document.createElement("p");
pTag.innerHTML = "Login";
pTag.style.fontWeight = "700";
pTag.style.textAlign = "center";
pTag.style.fontSize = "30px";
document.getElementById("Login").appendChild(pTag);
//------------Email Input -----------------------------------------
const inputEmail = document.createElement("Input");

inputEmail.style.margin = "10px" ;
inputEmail.style.width = "200px";
document.getElementById("Login").appendChild(inputEmail);
//------------Password Input -----------------------------------------
const inputPassword = document.createElement("Input");

inputPassword.style.margin = "10px";
inputPassword.style.width = "200px";
document.getElementById("Login").appendChild(inputPassword);
//------------Login Submit -------------------------------------------

const loginButton = document.createElement("button")
const p_login = document.createElement("p")
p_login.style.padding = "20px"; */

//--------------//--------------//--------------//--------------//----
document.body.style.width = "100%";
document.body.style.textAlign = "center";

const loginTitle = document.createElement("p");

loginTitle.innerHTML = "Login";
loginTitle.style.fontSize = "60px";
loginTitle.style.fontWeight = "Bold";

document.getElementById("parentContainer").appendChild(loginTitle);
const emailTitle = document.createElement("p");

emailTitle.innerHTML = "Username";
emailTitle.style.marginBottom = "5px";

document.getElementById("parentContainer").appendChild(emailTitle);
const inputEmail = document.createElement("input");

document.getElementById("parentContainer").appendChild(inputEmail);
const passwordTitle = document.createElement("p");

passwordTitle.innerHTML = "Password";
passwordTitle.style.marginBottom = "5px";

document.getElementById("parentContainer").appendChild(passwordTitle);
const inputPassword = document.createElement("input");

inputPassword.style.marginBottom = "10px";

document.getElementById("parentContainer").appendChild(inputPassword);

const submitButton = document.createElement("p");

submitButton.innerHTML = "Submit";
submitButton.style.margin = "auto";
submitButton.style.padding = "5px";

submitButton.style.color = "white";
submitButton.style.width = "fit-content";
submitButton.style.background = "green";
submitButton.style.borderRadius = "10px";

document.getElementById("parentContainer").appendChild(submitButton);
submitButton.addEventListener("click", () => {
  if (inputEmail.value.includes("@gmail.com")) {
    console.log(true);
  } else {
    const warning = document.createElement("p");
    warning.innerHTML = "Please enter valid email";
    warning.style.color = "red";
    document.getElementById("parentContainer").appendChild(warning);
  }
  if (inputPassword.value.length >= 8) {
    console.log(true);
  } else {
    const warning = document.createElement("p");
    warning.innerHTML = "Password should contain 8 character at least";
    warning.style.color = "red";
    document.getElementById("parentContainer").appendChild(warning);
  }
});
