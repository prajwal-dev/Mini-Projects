let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");

let API = "https://6879e6afabb83744b7ea6c45.mockapi.io/api/v1/todos";

addBtn.addEventListener("click", function () {
  let value = taskInput.value;
  console.log(value);
});

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();

  data.forEach((obj) => {
    let div = document.createElement("div");
    div.className = "todo";
    div.innerHTML = `<p>${obj.text}</p>
    <div>
      <button>Delete</button>
      <button>Edit</button>
    </div>`;

    todoContainer.append(div);
  });
}
fetchData();

function postData() {}
