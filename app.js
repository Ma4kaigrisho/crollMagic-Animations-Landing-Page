gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 30%",
        end: ()=> `+=${document.querySelector(".square").offsetHeight}`,
        markers: true,
        toggleClass: "green"
    }
})