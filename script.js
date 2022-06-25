const button = document.querySelector(".mobile-nav-toggle");
const contents = document.querySelector(".contents");
const circle4 = document.querySelector(".circle4");
const iconButton = document.querySelector(".button");
const contentsHover = document.querySelectorAll(".contents-hover");
const navContent = document.querySelectorAll(".nav-content");

button.addEventListener("click", () => {
  const visibility = contents.getAttribute("data-visible");

  if (visibility === "false") {
    contents.setAttribute("data-visible", true);
    button.setAttribute("aria-expanded", true);
  } else {
    contents.setAttribute("data-visible", false);
    button.setAttribute("aria-expanded", false);
  }
  console.log(visibility);
});

const navigationHeight = document.querySelector(".nav-bar").offsetHeight;
document.documentElement.style.setProperty(
  "--nav-size",
  navigationHeight - 1 + "px"
);

console.log(navigationHeight);

circle4.addEventListener("click", () => {
  iconButton.classList.toggle("active");
});

contentsHover.forEach((contenthover, index) => {
  contenthover.addEventListener("mouseenter", () => {
    console.log("yes", index);
    clearShow();
    navContent[index].classList.add("show");
    navContent[index].style.zIndex = "2";
    setTimeout(function () {
      navContent[index].classList.remove("show");
    }, 3000);
  });
});

function clearShow() {
  navContent.forEach((content) => {
    content.classList.remove("show");
    content.style.zIndex = "0";
  });
}
