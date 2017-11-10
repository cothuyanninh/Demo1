window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.height = "50px";
        $('#instabook').addClass('animated fadeOutUp');

    } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        document.getElementById("nav").style.height = "75px";

        $('#instabook').removeClass('animated fadeOutUp');
        $('#instabook').addClass('animated fadeInDown');
        document.getElementById("instabook").style.display = "inline-block";
    }
}