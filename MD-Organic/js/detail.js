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

function changeProductImage(imageSrc) {
  document.getElementById("productImage").src = imageSrc;
}

function selectOption(option, imageUrl) {
  // Reset border color for all images
  var images = document.querySelectorAll(".product-image img");
  images.forEach(function (img) {
    img.style.borderColor = "transparent";
  });

  // Change main product image
  var mainImage = document.querySelector(".product-image img");
  mainImage.src = imageUrl;
}

function showContent(contentId) {
  var contents = document.getElementsByClassName("product-content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  document.getElementById(contentId).style.display = "block";

  var links = document
    .getElementsByClassName("product-link")[0]
    .getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
  event.target.classList.add("active");
}

showContent("product-description");

// For Footer Years
document.getElementById("year").innerHTML = new Date().getFullYear();
