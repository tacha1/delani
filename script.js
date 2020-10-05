$(document).ready(function(){
    $("#design").click(function(){
        $("#design-text").toggle();
    });
    $("#design-text").click(function(){
        $("#design").toggle();
        $("#design-text").toggle();
    });

    $("#development").click(function(){
        $("#development-text").toggle();
    });
    $("#development-text").click(function(){
        $("#development").toggle();
        $("#development-text").toggle();
    });

    $("#product").click(function(){
        $("#product-text").toggle();
    });
    $("#product-text").click(function(){
        $("#product").toggle();
        $("#product-text").toggle();
    });

    $(".paragraph4").hide();

    $(".photo4").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph4").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph4").fadeOut();
    });

    $(".paragraph3").hide();
    $(".photo3").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph3").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph3").fadeOut();
    });

    $(".paragraph2").hide();
    $(".photo2").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph2").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph2").fadeOut();
    });

    $(".paragraph1").hide();
    $(".photo1").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph1").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph1").fadeOut();
    });

    $(".paragraph5").hide();
    $(".photo5").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph5").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph5").fadeOut();
    });

    $(".paragraph6").hide();
    $(".photo6").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph6").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph6").fadeOut();
    });

    $(".paragraph7").hide();
    $(".photo7").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph7").fadeIn();
    },function(){
        $(this).stop().animate({opacity:2},500);
        $(".paragraph7").fadeOut();
    });

    $(".paragraph8").hide();

    $(".photo8").hover(function(){
        $(this).stop().animate({opacity:.2},200);
        $(".paragraph8").fadeIn();
    },function(){
        $(this).stop().animate({opacity:1},500);
        $(".paragraph8").fadeOut();
    });

    $("#send").click(function(event){
        var name=$("#inputName").val();
        var email=$("#inputEmail").val();
        var message=$("#inputMessage").val();
        if((name==="")||(email==="")||(message==="")){
            alert("Please, fill the required fields!");
        }
        else{
            alert("Dear",""+name+ ",we have received your message. Thank you for reaching out to us!");
        }
        event.preventDefault();
    });
 
});
