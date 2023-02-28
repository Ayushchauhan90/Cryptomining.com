$(document).ready(function(){
    $(".cons").on("click",function(){
        $(".pros-content").fadeToggle(function(){ 
        })
        $(".cons-arrow").toggleClass("rotateArrowButton")
    })
})
$('.rating-img-sliding').owlCarousel({
    navText:[`<img src="img/arrow-left.svg" class="arrow-left">`,`<img src="img/arrow-right.svg" class="arrow-right">`],
    loop:true,
    // autoplay:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1.6
        },
        600:{
            items:2
        },
        800:{
            items:3
        }
    }
})
