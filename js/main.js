$(function(){

    $(".toggle-btn").on("click", function(){
        $("header").toggleClass("open");
    })

    $(".mask").on("click",function(){
        $("header").removeClass("open");
    });
})