// Get reference to the input box and list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
  // Check if the input box is empty
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // Create a new list item (li) and set its content to the input value
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // Append the new list item to the list container
    listContainer.appendChild(li);

    // Create a span element (delete button) and append it to the list item
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode character for 'x'
    li.appendChild(span);
  }

  // Clear the input box after adding a task
  inputBox.value = "";

  // Save the updated list to local storage
  saveData();
}

// Event listener for clicks on the list container
listContainer.addEventListener(
  "click",
  function (e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
      // Toggle the 'checked' class to mark/unmark the task as completed
      e.target.classList.toggle("checked");
      // Save the updated list to local storage
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // If the clicked element is a span (delete button), remove its parent (list item)
      e.target.parentElement.remove();
      // Save the updated list to local storage
      saveData();
    }
  },
  false
);

// Function to save the current list to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to retrieve and display tasks from local storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Load and display tasks when the page is loaded
showTask();
