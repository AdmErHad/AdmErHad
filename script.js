$(document).ready(function(){
    let hamburger = $("#hamburger");
    let menu = $("#menu");
    let elements = $("#nav-elements");
    hamburger.on("click",function(){
        hamburger.children().toggleClass("black")
        hamburger.children("#ham-middle").toggleClass("none")
        hamburger.children("#ham-top").toggleClass("rotateM")
        hamburger.children("#ham-bottom").toggleClass("rotateP")
        menu.toggleClass("hidden shown");
        elements.toggleClass("hidden shown");
    })
})



jQuery(document).ready(function($) {
  $('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate( {
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    } );
  } );
} );



function parallax(){
    
var FormBg = document.getElementById("form-bg");
    FormBg.style.transform = 'translateY('+ -((window.pageYOffset/2.5)-800)+'px)';
    
}

window.addEventListener("scroll", parallax, false);













