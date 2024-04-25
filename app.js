const menuBtn = document.querySelector("#menuBtn");
const sideBar = document.querySelector(".sideBar");
const deleteBtn = document.querySelector("#deleteBtn");
console.log(menuBtn, sideBar, deleteBtn);
deleteBtn.style.display = "none";
menuBtn.addEventListener("click", function () {
  sideBar.style.display = "block";
  menuBtn.style.display = "none";
  deleteBtn.style.display = "block";
});
deleteBtn.addEventListener("click", function () {
  sideBar.style.display = "none";
  menuBtn.style.display = "block";
  deleteBtn.style.display = "none";
});
