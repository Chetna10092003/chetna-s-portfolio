AOS.init({
  duration: 1000,
  once: true,
});

var typed = new Typed(".typing", {
  strings: ["Web Developer", "Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting me!");
});
