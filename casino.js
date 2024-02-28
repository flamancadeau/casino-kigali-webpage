window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const top = navbar.offsetTop;
  
    if (window.pageYOffset > top) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });
  