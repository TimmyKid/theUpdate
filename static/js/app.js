// App.js -- Web~AnimationS --
$(window).on( "load", function(){
  // JQuery Variables >>>>>>
  const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");
  const date = document.getElementById("year");
  // const image = document.getElementByTagName("img");

  // Custom cursor animations ========
  document.addEventListener("mousemove", e => {
    cursor.setAttribute( "style", "left: "+(e.clientX - 2.5)+"px; top:"+(e.clientY - 2.5)+"px;");
    cursor2.setAttribute( "style", "left: "+(e.clientX - 15)+"px; top:"+(e.clientY - 15)+"px;");
  });
  // document.onload()
  $(window).mouseleave(function() {
      // cursor.setAttribute("style", "opacity: 0")
      // cursor2.style.opacity = "0"
    $(cursor).css("opacity","0")
    cursor2.setAttribute("style", "left: 94.89254%; top:88.281%")
  });

  //Footer/Copyright current date
  date.innerHTML = (new Date().getFullYear());

  //=== Navabar Toggler == 
  var sB = 0;
  document.querySelector(".button").addEventListener( "click", function i() {
    if (!sB) {
      sideBarTimeline.play()
      sB = 1
    } else {
      sideBarTimeline.reverse();
      sB = 0
    };
  });
  const sideBarTimeline = gsap.timeline({ paused: true, })
    .fromTo("#sideBar", {
      x: "100%",
    }, {
      x: "0%",
      className: "-=container-fluid",
      ease: "power1.easeIn",
      duration: 1,
      stagger: 0.3,
    })
    .from( "#sideBar hr", {x: "50%", autoAlpha: 0, duration: 1},"<")
    .from( "#sideBar ul li a ", { y: "20%", autoAlpha: 0, duration: .5, ease: "circ.easeInOut", stagger: 0.2})
    .from( "#sideBar ins",{ y: "-50%", autoAlpha: 0,})
    .from( ".sideBar_foo", { y: "20%", autoAlpha: 0, ease: "sine.easeIn" },"<.2")
    .from(".void" ,{  autoAlpha: 0, duration: .5})
    .from(".voidControl" ,{  autoAlpha: 0, duration: .5}, "<.1")


  // >>>> Cursive__behaviour >>>>


  // document.ready(function() {
  //   document.getElementById("#sound")[0].play();
  // });
  // ======= END OF JQUERY =========



  // GSAP -- ANIMATIONS ----
// gsap.registerPlugin(MotionPathPlugin);

// gsap.to("#dot",{duration: 4, motionPath:"#path"});
  // Gsap Global Variables >>>>>
  const word = ["Elevete Solutions."]

  //Introductory text animations...
  const timeline = gsap.timeline({defaults: { duration: 3, ease: "circ"}, paused: true})
  timeline
    // .from(".vl",{height: "0%", duration: 5})
    // // == Welcome Text
    // .from("#preFace > h1", { autoAlpha:0, x: "-15%"})
    // .from("#preFace .text-center h1", { opacity: 0, x: "25%"}, "<")
    // // == Blinking cursor and Logo typeOut ==
    // .to(".blinkr", {autoAlpha: 1, ease: "power2.inOut", repeat: -2, duration: .5})
    // .fromTo(".introText", {text: ""}, {text: {value: word}, ease: "back.easeInOut"})
    // // == Utility reveal ==
    // .from(".scrollDownWrapper", { autoAlpha: 0, duration: 1, ease: "none"}, ">.5")
    // .from(".navbar", { autoAlpha: 0, duration: 1, ease: "none"}, "<")
    // // close animation and end timeline
    // .to(".blinkr", {autoAlpha: 0, duration: .6, ease: "circ.easeOut", onComplete: () => {
    //   timeline.kill()
    // } }, "<1")
  //

  // ==== Excerpt Reveal on Scroll ====
  gsap.from("#excerpt .item h1", {
    scrollTrigger: {
      trigger: "#excerpt .item h1",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1
  });
  gsap.from("#excerpt .item2 h1", {
    scrollTrigger: {
      trigger: "#excerpt .item2 h1",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1
  });
  gsap.from("#excerpt .item3 h1", {
    scrollTrigger: {
      trigger: "#excerpt .item3 h1",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1
  });
  // == Excerpt Section Paragraph
  gsap.from("#excerpt .item p", {
    scrollTrigger: {
      trigger: "#excerpt .item p",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1.5,
  });
  gsap.from("#excerpt .item2 p", {
    scrollTrigger: {
      trigger: "#excerpt .item2 p",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1.5,
  });
  gsap.from("#excerpt .item3 p", {
    scrollTrigger: {
      trigger: "#excerpt .item3 p",
      toggleActions: "play pause restart reset"
    },
    x: "20%",
    autoAlpha: 0,
    ease: "circ.easeIn",
    duration: 1.5,
  });

  // ==== Team animations -- Reveal on Scroll ====


});
