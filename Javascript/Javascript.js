$(document).ready(function(){
    $(".navigation .navbar .logo-toggle-container .toggle-box").click(function(){
        $(".navigation .menu").stop().slideToggle();
    });
});