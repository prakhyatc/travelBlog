// Select elements
var navToggle = document.querySelector(".nav-toggle");
var navMenu = document.querySelector(".nav-menu");

// Toggle navigation menu
navToggle.addEventListener("click", function() {
  navMenu.classList.toggle("show");
});

// Smooth scrolling to anchor links
var anchorLinks = document.querySelectorAll('a[href^="#"]');
Array.prototype.forEach.call(anchorLinks, function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
    navMenu.classList.remove("show");
  });
});

// Scroll to top button
var scrollToTopButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

scrollToTopButton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Add animation on scroll
var scrollElements = document.querySelectorAll(".scroll-animation");

var scrollAnimation = function() {
  Array.prototype.forEach.call(scrollElements, function(element) {
    if (isElementInViewport(element)) {
      element.classList.add("animate");
    }
  });
};

var isElementInViewport = function(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener("scroll", scrollAnimation);
window.addEventListener("resize", scrollAnimation);
window.addEventListener("load", scrollAnimation);


// Function to change the color of the heading on button click
function changeHeadingColor() {
    var heading = document.getElementById("main-heading");
    heading.style.color = "blue";
  }
  
  // Function to display an alert message on button click
  function showAlert() {
    alert("You clicked the button!");
  }
  
  // Function to toggle the visibility of the image on button click
  function toggleImage() {
    var image = document.getElementById("main-image");
    if (image.style.display === "none") {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }
  
  // Function to dynamically update the footer with the current year
  function updateFooter() {
    var year = new Date().getFullYear();
    var footer = document.getElementById("footer");
    footer.innerText = "© " + year + " My Website";
  }
  
  // Function to handle form submission
  function submitForm() {
    var nameInput = document.getElementById("name-input");
    var emailInput = document.getElementById("email-input");
    
    // Perform form validation
    if (nameInput.value === "" || emailInput.value === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    // Display success message
    alert("Form submitted successfully!");
    
    // Clear form inputs
    nameInput.value = "";
    emailInput.value = "";
  }
  
  // Event listeners for button clicks
  document.getElementById("change-color-btn").addEventListener("click", changeHeadingColor);
  document.getElementById("show-alert-btn").addEventListener("click", showAlert);
  document.getElementById("toggle-image-btn").addEventListener("click", toggleImage);
  document.getElementById("submit-form-btn").addEventListener("click", submitForm);
  
  // Event listener to update footer on page load
  window.addEventListener("load", updateFooter);
  