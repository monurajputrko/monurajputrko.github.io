
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("resume-link-nav")
    .addEventListener("click", function(e) {
      e.preventDefault();
      NewTab();
    });
  document
    .getElementById("resume-link-about")
    .addEventListener("click", function(e) {
      e.preventDefault();
      NewTab();
    });
  document
    .getElementById("resume-link-home")
    .addEventListener("click", function(e) {
      e.preventDefault();
      NewTab();
    });

  function NewTab() {
        // Open resume in a new tab (use root-relative path for GitHub Pages)
        window.open("/Monu-Singh-Resume.pdf", "_blank");
        // Also create an invisible anchor to trigger download
        const a = document.createElement("a");
        a.href = "/Monu-Singh-Resume.pdf";
        a.download = "Monu-Singh-Resume.pdf";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  }
});

