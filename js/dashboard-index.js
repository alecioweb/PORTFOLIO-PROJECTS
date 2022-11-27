// MenuToggle
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  // body.classList.toggle("hidden");
};

// to move indicator when tab is open
const list = document.querySelectorAll(".list");

function activeTab() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeTab));

//dark mode
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  //   toggle = body.querySelector(".toggle"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
