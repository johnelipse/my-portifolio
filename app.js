const menuBtn = document.querySelector("#menuBtn");
const sideBar = document.querySelector(".sideBar");
const deleteBtn = document.querySelector("#deleteBtn");
const icony = document.querySelectorAll(".icony");
console.log(menuBtn, sideBar, deleteBtn, icony);
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

// setting the sidebar links
function focusLinks() {
  icony.forEach((icon) => {
    icon.addEventListener("click", () => {
      console.log("tag clicked");

      icony.forEach((otherIcon) => {
        otherIcon.classList.remove("active");
        otherIcon.style.color = "gray";
      });

      icon.classList.add("active");
      icon.style.color = "#00c278";
      icon.style.transition="0.5s"
      icon.style.transform="scale(1.1)"
    });
  });
}
focusLinks();
