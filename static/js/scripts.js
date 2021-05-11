$("#imgDes").click(function () {
    $("#imgDes").hide();
    $("#textDes").show();
}); $("#textDes").click(function () {
    $("#imgDes").show();
    $("#textDes").hide();
});
$("#imgDev").click(function () {
    $("#imgDev").hide();
    $("#textDev").show();
}); $("#textDev").click(function () {
    $("#imgDev").show();
    $("#textDev").hide();
});

$("#imgProd").click(function () {
    $("#imgProd").hide();
    $("#textProd").show();
}); $("#textProd").click(function () {
    $("#imgProd").show();
    $("#textProd").hide();
});


$("#imgDec").click(function () {
    $("#imgDec").hide();
    $("#textDec").show();
}); $("#textDec").click(function () {
    $("#imgDec").show();
    $("#textDec").hide();
});
$("#imgDez").click(function () {
    $("#imgDez").hide();
    $("#textDez").show();
}); $("#textDez").click(function () {
    $("#imgDez").show();
    $("#textDez").hide();
});
$("#imgProc").click(function () {
    $("#imgProc").hide();
    $("#textProc").show();
}); $("#textProc").click(function () {
    $("#imgProc").show();
    $("#textProc").hide();
});


$(document).ready(function(){
    $(".button").click(function(){
        var value =$(this).attr("data-filter");
        if(value=="all"){
            $(".filter").show("100");
        }
        else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
        $("ul .button").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    })
})


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 4 
            }
        }, {
            breakpoint:520,
            setting: {
                slidesToShow: 3
            }
        }]

    });
});


$("#submit").click(function () {
    var yourFullName = $("#name").val();
    var yourEmail = $("#email").val();
    var yourMessage = $("#exampleFormControlTextarea1").val();
    if (yourFullName == '' || yourEmail == '' || yourMessage == '') {
        alert("Please check the missing field(s)");
    } else {
        alert("Your message was sent successfully. Thanks!");
    }
    $("form").trigger("reset");
})