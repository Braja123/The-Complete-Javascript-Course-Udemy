"use strict";

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".setion")
console.log("all", allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button")
console.log(allButtons);

const allBtns = document.getElementsByClassName("btn");
console.log(allBtns);

// Creating and Inserting Elements
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookied for improved functionality and analytics"
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>'
// header.prepend(message);  // prepend means add this element at the first child of the "header" element
header.append(message); // append means add this element at the last child of the "header" element
// at a time we can not append or prepend child. To do that need to follow below code
// header.append(message.cloneNode(true)); // This how at a time we can append and prepend element

// header.before(message); // This will add "message" element before "header" as a siblings
header.after(message); // This will add "message" element after "header" as a siblings

// DELETE ELEMENTS
document.querySelector(".btn--close--cookie").addEventListener("click", function() {
  // document.querySelector(".cookie-message").remove()
  // OR below code
  message.remove()
})

// //////////////////////////////////////////

// STYLES
message.style.backgroundColor = "#37383d";
message.style.width = "120%"

console.log(message.style.color); // as it is not there as inline style so won't get value
console.log(message.style.backgroundColor); //it will show as inline style

console.log(getComputedStyle(message).color); // as "color" is not there as inline style so won't get value to get the value need to use by using "getComputedStyle"
console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty("--color-primary", "orangered");   // here it will change styles globally


// ATTRIBUTES
const logo = document.querySelector(".nav__logo")
console.log(logo.src);  // it will give us absolute url
console.log(logo.getAttribute("src"));  // to get the exact src value
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful minimalistic logo"; // this how we can change the attribute value

// non-standard
console.log(logo.designer); // will get undefined as "designer" is not predefined by element
console.log(logo.getAttribute("designer")); // this is how we get the static attribute
logo.setAttribute("company", "bankist");  // this is how we set the attribute in the element 

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

console.log(logo.dataset.versionNumber);  //for get data set

// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle("c"); //
logo.classList.contains('c'); // return boolean value

// EVENTS
const h1 = document.querySelector("h1");

const alerth1 = function() {
  alert("You entered in h1");
  
}


h1.addEventListener("mouseenter", alerth1)  //mouseenter will work when mouse hover

setTimeout(() => h1.removeEventListener("mouseenter", alerth1), 3000)









///////////////////////////////////////
// Modal window

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".btn--close-modal");
// const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal))

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
