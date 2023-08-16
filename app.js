gsap.registerPlugin(ScrollTrigger);

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();


    //fade in
    $('.project').each(function(){
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.85,
            // reverse: false
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });
    //parallax effect
    var parSceneStart = new ScrollMagic.Scene({
        triggerElement:".first",
        triggerHook: 0,
        duration: "100%"
    })
    .setTween(TweenMax.from('.bcgpara', 1, {y: '-26%', ease:Power0.easeNone}))//parralax movement
    .addTo(controller);

    //sticky navbar
    ScrollTrigger.create({
        trigger: ".start",
        start: "top 8%",
        toggleClass: { targets: "nav", className:"nav-active"}
    })

    //parallax effect-2
    var parScene = new ScrollMagic.Scene({
        triggerElement:".bcg-parallax",
        triggerHook: 1,
        duration: "100%"
    })
    .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease:Power0.easeNone}))
    .addTo(controller);

    //typewriter effect

    var myText = "The vast and mysterious sea depths have always fascinated humanity, offering a realm of uncharted mysteries waiting to be unveiled. Below the sunlit surface, a world shrouded in darkness stretches out, inviting exploration into its depths. The ocean's profound expanses remain largely untouched, harboring a plethora of life adapted to withstand the extreme pressures and conditions that define this enigmatic world. Bioluminescent organisms emit ethereal glows, piercing through the perpetual darkness in a captivating dance of light. Ingenious adaptations allow creatures to thrive where human presence is a rarity.";
    let myTextLength = myText.length;

    function typing( displayedLength ) {
      if( displayedLength <= myTextLength ) {
        $( "#text" ).text( myText.substring( 0, displayedLength ) );
        }
      }
    var typewritingOnScroll = new TimelineMax();

    var typewritingScene = new ScrollMagic.Scene({ triggerElement: "#project2", duration: 300, triggerHook: 0.5 })
        .on('progress',  function () {
          let scrollProgress = Math.ceil( typewritingScene.progress() * myTextLength );
          typing( scrollProgress );
        })
    .setTween(typewritingOnScroll)
    .addTo( controller );

    const scalingElement = document.querySelector("#scaleimg");

    const scaleScene = new ScrollMagic.Scene({
    triggerElement: "#project3",
    triggerHook: 0.8, // Trigger when the element is at the center of the viewport
    duration: "100%", // Duration of the animation
  })
    .setTween(gsap.fromTo(scalingElement, { scale: 1 }, { scale: 2 }))//scaling of the element
    .addTo(controller);

})