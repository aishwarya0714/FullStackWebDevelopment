$("h1").css("color","blue");
console.log($("h1").css("font-size"));

$("h1").addClass("big-title margin-50");
$("h1").text("Hey!!"); 

console.log($("img").attr("src"));
$("a").attr("href","https://www.google.com");

$("h1").click( function(){
    $("h1").css("color","purple");
});

for(var i =0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color = "purple";
    });
};

$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
    // console.log(event.key);
});

// mouseover using on

$("h1").on("mouseover" ,function(){
    $("h1").css("color","pink");
});

$("button").on("click" ,function(){
    $("h1").toggle();
});

$("button").on("click" ,function(){
    $("h1").hide();
});

$("button").on("click" ,function(){
    $("h1").fadeOut();
});

$("button").on("click" ,function(){
    $("h1").fadeToggle();
});