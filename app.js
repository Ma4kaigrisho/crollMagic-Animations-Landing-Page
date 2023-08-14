gsap.registerPlugin(ScrollTrigger);

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var pinScene = new ScrollMagic.Scene({
        triggerElement: ".first",
        pin: true
    })
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
            name: "fade scene 1",
            colorTrigger: "black"
        })
        .addTo(controller);
    });
})