// variable declaration
const inputTitle = document.getElementById("note-title");
const inputText = document.getElementById("note-text");
const transmit = document.getElementById("export");
const remove = document.querySelector(".delete");
let parent = document.querySelector(".container");

let child, h1, p, button;

// event handling
transmit.addEventListener("click", function (e) {
  e.preventDefault();
  if ((inputTitle.value == "") | (inputTitle.value == " ")) {
    alert("Please write a title of this note !");
  } else if ((inputText.value == "") | (inputText.value == " ")) {
    alert("Please write some note for this title !");
  } else {
    // creating new element
    child = document.createElement("div");
    button = document.createElement("button");
    h1 = document.createElement("h1");
    p = document.createElement("p");

    // adding them class
    child.classList.add("lists");
    button.classList.add("delete");
    h1.classList.add("out-title");
    p.classList.add("text");

    // insert value into them
    h1.innerHTML = inputTitle.value;
    p.innerHTML = inputText.value;
    button.innerHTML = "Delete";

    // append all child
    child.appendChild(button);
    child.appendChild(h1);
    child.appendChild(p);
    parent.appendChild(child);

    // reset input values
    inputTitle.value = "";
    inputText.value = "";

    // add event listener to delete button
    button.addEventListener("click", function () {
      parent.removeChild(this.parentElement);
    });
  }
});
