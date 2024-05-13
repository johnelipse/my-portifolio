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

//PORTFOLIO BUTTONS
const allBtn=document.querySelector("#allBtn");
const htmlBtn=document.querySelector("#htmlBtn");
const jsBtn=document.querySelector("#jsBtn");
const all=document.querySelector(".all");
const htmlCss=document.querySelector(".html-css");
const htmlCssJs=document.querySelector(".html-css-js");
// console.log(allBtn,htmlBtn,jsBtn,all,htmlCss,htmlCssJs)
allBtn.style.borderBottom="solid 3.5px #00c278";
htmlCss.style.display="none";
htmlCssJs.style.display="none";
htmlBtn.addEventListener("click", function(){
  allBtn.style.borderBottom="none";
  htmlBtn.style.borderBottom="solid 3.5px #00c278";
  jsBtn.style.borderBottom="none";
  all.style.display="none";
  htmlCss.style.display="grid";
  htmlCssJs.style.display="none";
})
jsBtn.addEventListener("click", function(){
  allBtn.style.borderBottom="none";
  htmlBtn.style.borderBottom="none";
  jsBtn.style.borderBottom="solid 3.5px #00c278";
  all.style.display="none";
  htmlCss.style.display="none";
  htmlCssJs.style.display="grid";
})
allBtn.addEventListener("click", function(){
  allBtn.style.borderBottom="solid 3.5px #00c278";
  htmlBtn.style.borderBottom="none";
  jsBtn.style.borderBottom="none";
  all.style.display="grid";
  htmlCss.style.display="none";
  htmlCssJs.style.display="none";
})