gsap.registerPlugin(ScrollTrigger);

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var pinScene = new ScrollMagic.Scene({
        triggerElement: ".first",
        triggerHook: 0,
        name: "Pin 1",
    })
    .setPin(".first", {pushFollowers: false})
    .addIndicators()
    .addTo(controller);


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
})