document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav a');
  
    function changeColorOnScroll() {
      var currentScroll = window.scrollY;
  
      sections.forEach(function(section, index) {
        var sectionTop = section.offsetTop - header.offsetHeight;
        var sectionBottom = sectionTop + section.offsetHeight;
  
        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          navLinks[index].style.color = "#FF6347";
        } else {
          navLinks[index].style.color = "#FFFFFF";
        }
      });
    }
  
    // Initial call to set the color based on the initial scroll position
    changeColorOnScroll();
  
    // Listen for scroll events
    window.addEventListener('scroll', changeColorOnScroll);
  });
  