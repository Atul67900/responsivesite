$(document).ready(function(){
    // $("p").click(function(){
    //     $(this).hide();
    // })


})
// $('p').on(
//     {
//         click: function(){
//             console.log("Thanks for Clicking", this);
//         },
//         mouseleave: function (){
//             console.log("mouseleave");
//         }
//     }
// )


// $('p').hide(10000);
// $('p').show();
// Animations in jQuery
// 1. toggle
// 2. fadeIn
// 3. fadeOut
// 4.fadeTo
// 5.fadeToggle

$('#toggle').click(function(){
    $('.another').fadeToggle(1000);
})

// $('#toggle').click(function(){
//     $('.another').slideToggle(1000, function(){
//         console.log("Done");
//     });
// })


// $("p").animate({opacity:0.3}, 4000);
// $("p").animate({opacity:0.9}, 1000);
// $("p").animate({height: "10rem"}, 4000);