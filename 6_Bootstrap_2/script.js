var nigger = 0;

$(".dark-mode").click(function () {
    $("html").toggleClass("dark-mode");
    $("#header a").toggleClass("dark-mode");
    $("#book a").toggleClass("dark-mode");
    $("#footer a").toggleClass("dark-mode");    
    if(nigger == 0){
        nigger ++;
        $("#header img").attr("src","sun.png")
    }else {
        nigger --;
        $("#header img").attr("src","moon.png")
    }
})

$("#logo").click(function() {
    $(".sidenav").width(250);
});

$(".closebtn").click(function() {
  $(".sidenav").width(0);
});