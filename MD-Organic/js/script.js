// //Toggle class active
const navbarNav = document.querySelector(".navbar-nav-link");
document.querySelector(".hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// USE IF WANT THIS FUNCTION

// const hamburger = document.querySelector(".hamburger");
// const navbarLink = document.querySelector(".navbar-nav-link>a");

// document.addEventListener("click", function (e) {
//   if (!hamburger.contains(e.target) && !navbarLink.contains(e.target)) {
//     navbarNav.classList.remove("active");
//   }
// });

document.querySelector(".hamburger").addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("is-active");
});

// For Navbar Animations
const navBar = document.querySelector(".navbar");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let currScrollPos = window.scrollY;

  if (currScrollPos > prevScrollPos) {
    navBar.style.transition = "transform 0.3s ease";
    navBar.style.transform = `translateY(-100%)`;
  } else {
    navBar.style.transition = "transform 5s ease";
    navBar.style.transform = `translateY(0%)`;
  }

  prevScrollPos = currScrollPos;
});

// For Footer Years
document.getElementById("year").innerHTML = new Date().getFullYear();

// Tabs Slider in section three
const tabs = document.querySelectorAll('.tabs input[type="radio"]');
const riceContainers = document.querySelectorAll(".rice");

tabs.forEach((tab, index) => {
  tab.addEventListener("change", () => {
    riceContainers.forEach((container, containerIndex) => {
      container.style.display = containerIndex === index ? "flex" : "none";
    });
  });
});

// Set the initial active tab and show the corresponding cards-container
tabs[0].checked = true;
riceContainers[0].style.display = "flex";
