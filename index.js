//--------------//--------------//--------------//--------------//----//--------------//--------------//--------------//--------------//----
// document.body.style.width = "100%";
// document.body.style.textAlign = "center";

// const loginTitle = document.createElement("p");

// loginTitle.innerHTML = "Login";
// loginTitle.style.fontSize = "60px";
// loginTitle.style.fontWeight = "Bold";

// document.getElementById("parentContainer").appendChild(loginTitle);

// const emailContainer = document.createElement("div");
// emailContainer.id = "email_container";
// document.getElementById("parentContainer").appendChild(emailContainer);

// const emailTitle = document.createElement("p");

// emailTitle.innerHTML = "Username";
// emailTitle.style.marginBottom = "5px";

// document.getElementById("email_container").appendChild(emailTitle);
// const inputEmail = document.createElement("input");

// document.getElementById("email_container").appendChild(inputEmail);

// const passwordContainer = document.createElement("div");
// passwordContainer.id = "password_container";
// document.getElementById("parentContainer").appendChild(passwordContainer);

// const passwordTitle = document.createElement("p");

// passwordTitle.innerHTML = "Password";
// passwordTitle.style.marginBottom = "5px";

// document.getElementById("password_container").appendChild(passwordTitle);
// const inputPassword = document.createElement("input");

// inputPassword.style.marginBottom = "10px";

// document.getElementById("password_container").appendChild(inputPassword);

// const submitButton = document.createElement("p");

// submitButton.innerHTML = "Submit";
// submitButton.style.margin = "auto";
// submitButton.style.padding = "7px";
// submitButton.style.color = "white";
// submitButton.style.width = "fit-content";
// submitButton.style.background = "green";
// submitButton.style.borderRadius = "10px";

// document.getElementById("parentContainer").appendChild(submitButton);
// submitButton.addEventListener("click", () => {
//   if (
//     inputEmail.value.includes("@gmail.com") &&
//     inputPassword.value.length >= 8
//   ) {
//     alert("Login Success!");
//   } else if (!inputEmail.value.includes("@gmail.com")) {
//     const warning = document.createElement("p");
//     warning.innerHTML = "Please enter valid email";
//     warning.style.color = "red";
//     document.getElementById("email_container").appendChild(warning);
//   } else {
//     const warning = document.createElement("p");
//     warning.innerHTML = "Password should contain 8 characters at least";
//     warning.style.color = "red";
//     document.getElementById("password_container").appendChild(warning);
//   }
// });
//--------------//--------------//--------------//--------------//----//--------------//--------------//--------------//--------------//----
document.body.style.width = "100%";
document.body.style.textAlign = "center";

const registrationTitle = document.createElement("p");
registrationTitle.innerHTML = "REGISTRATION FORM";
registrationTitle.style.fontSize = "30px";
registrationTitle.style.fontWeight = "Bold";
document.getElementById("registrationContainer").appendChild(registrationTitle);

//-----------------------------

//Firstname
const firstNameContainer = document.createElement("div");
firstNameContainer.id = "firstName_container";
document
  .getElementById("registrationContainer")
  .appendChild(firstNameContainer);
//Firstname Title
const firstNameTitle = document.createElement("p");
firstNameTitle.innerHTML = "Firstname";
document.getElementById("firstName_container").appendChild(firstNameTitle);
//Firstname Input
const firstNameInput = document.createElement("input");
document.getElementById("firstName_container").appendChild(firstNameInput);

//-----------------------------

//Lastname
const lastNameContainer = document.createElement("div");
lastNameContainer.id = "lastName_container";
document.getElementById("registrationContainer").appendChild(lastNameContainer);
//Lastname title
const lastNameTitle = document.createElement("p");
lastNameTitle.innerHTML = "Lastname";
document.getElementById("lastName_container").appendChild(lastNameTitle);
//Lastname Input
const lastNameInput = document.createElement("input");
document.getElementById("lastName_container").appendChild(lastNameInput);

//-----------------------------

//Age
const ageContainer = document.createElement("div");
ageContainer.id = "age_container";
document.getElementById("registrationContainer").appendChild(ageContainer);
//Age title
const ageTitle = document.createElement("p");
ageTitle.innerHTML = "Age";
document.getElementById("age_container").appendChild(ageTitle);
//Age input
const ageInput = document.createElement("input");
document.getElementById("age_container").appendChild(ageInput);

//-----------------------------

//Birthday
const birthdayContainer = document.createElement("div");
birthdayContainer.id = "birthday_container";
document.getElementById("registrationContainer").appendChild(birthdayContainer);
//Birthday title
const birthdayTitle = document.createElement("p");
birthdayTitle.innerHTML = "Birthday";
document.getElementById("birthday_container").appendChild(birthdayTitle);
//Birthday input
const birthdayInput = document.createElement("input");
document.getElementById("birthday_container").appendChild(birthdayInput);

//-----------------------------

//Gender
const genderContainer = document.createElement("div");
genderContainer.id = "gender_container";
document.getElementById("registrationContainer").appendChild(genderContainer);
//Gender title
const genderTitle = document.createElement("p");
genderTitle.innerHTML = "Gender";
document.getElementById("gender_container").appendChild(genderTitle);
//Gender input
const genderInput = document.createElement("input");
document.getElementById("gender_container").appendChild(genderInput);

//-----------------------------

//Relationship stat
const relationshipContainer = document.createElement("div");
relationshipContainer.id = "relationship_container";
document.getElementById("registrationContainer").appendChild(relationshipContainer);
//Relationship stat title
const relationshipTitle = document.createElement("p");
relationshipTitle.innerHTML = "Relationship";
document.getElementById("relationship_container").appendChild(relationshipTitle);
//Relationship stat input
const relationshipInput = document.createElement("input");
document.getElementById("relationship_container").appendChild(relationshipInput);

//-----------------------------

//Username
const usernameContainer = document.createElement("div");
usernameContainer.id = "username_container";
document.getElementById("registrationContainer").appendChild(usernameContainer);
//Username title
const usernameTitle = document.createElement("p");
usernameTitle.innerHTML = "Username";
document.getElementById("username_container").appendChild(usernameTitle);
//Username input
const usernameInput = document.createElement("input");
document.getElementById("username_container").appendChild(usernameInput);

//-----------------------------

//Password
const passwordContainer = document.createElement("div");
passwordContainer.id = "password_container";
document.getElementById("registrationContainer").appendChild(passwordContainer);
//Password title
const passwordTitle = document.createElement("p");
passwordTitle.innerHTML = "Password";
document.getElementById("password_container").appendChild(passwordTitle);
//Password input
const passwordInput = document.createElement("input");
document.getElementById("password_container").appendChild(passwordInput);