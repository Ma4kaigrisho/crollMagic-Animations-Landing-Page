gsap.registerPlugin(ScrollTrigger);

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    // //pin
    // var pinScene = new ScrollMagic.Scene({
    //     triggerElement: ".first",
    //     triggerHook: 0,
    //     name: "Pin 1",
    // })
    // .setPin(".first", {pushFollowers: false})
    // .addIndicators()
    // .addTo(controller);

    //fade in
    $('.project').each(function(){
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.85,
            // reverse: false
        })
        .setClassToggle(this, 'fade-in')
        .addIndicators({
            name: "fade scene",
            colorTrigger: "black",
            triggerName: "fade in"
        })
        .addTo(controller);
    });
    //image fade in
    $(".fadeimg").each(function(){
        var fadeImgScene = new ScrollMagic.Scene({
            triggerElement: this,

        })
        .setClassToggle(this, "fade-in")
        .addIndicators({
            name: "fade img"
        })
        .addTo(controller);
    })

    var parSceneStart = new ScrollMagic.Scene({
        triggerElement:".first",
        triggerHook: 0,
        duration: "100%"
    })
    .setTween(TweenMax.from('.bcgpara', 1, {y: '-27%', ease:Power0.easeNone}))
    .addIndicators()
    .addTo(controller);

    var parScene = new ScrollMagic.Scene({
        triggerElement:".bcg-parallax",
        triggerHook: 1,
        duration: "100%"
    })
    .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease:Power0.easeNone}))
    .addIndicators()
    .addTo(controller);


})