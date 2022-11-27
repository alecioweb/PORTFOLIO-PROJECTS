const body = document.querySelector("body");
const toggleDark = document.getElementById("dark-mode-toggle");

toggleDark.addEventListener("click", function () {
  //   body.classList.toggle("dark");

  if (document.getElementById("dark-mode-check").checked) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
});
