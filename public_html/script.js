gsap.set("#load-animation-text", {
  width: "0%",
  opacity: "0",
  scaleX: "120%",
  x: -100,
});
gsap.set("#load-animation-dot", { scale: 2, color: "black", left: "40%" });
gsap.set("h1 span:nth-child(1)", { x: 400, opacity: 0, skewX: -50 });
gsap.set("h1 span:nth-child(2)", { opacity: 0 });
gsap.set("h1 span:nth-child(3)", { x: -400, opacity: 0, skewX: 50 });

// comment the following to disable the starting animation
// gsap.set("#load-animation-bg", {
//   width: "0%",
//   opacity: "0",
//   scaleX: "120%",
//   x: -100,
// });

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
let generalDuration = 0.5;

let t1 = gsap.timeline({
  repeat: 1,
  repeatDelay: 2,
  yoyo: true,
});

t1.to("#load-animation-text", {
  duration: generalDuration,
  width: "100%",
  scaleX: "100%",
  opacity: "1",
  x: 0,
  ease: "expo.inOut",
  delay: 2 * generalDuration,
});

let t2 = gsap.timeline();

t2.to("#load-animation-dot", {
  duration: generalDuration,
  left: "130%",
  scale: 4,
  ease: "expo.inOut",
})
  .to("#load-animation-dot", {
    duration: generalDuration,
    left: "-100",
    scaleX: 4,
    ease: "expo.inOut",
  })
  .to("#load-animation-dot", {
    duration: generalDuration,
    left: "120%",
    scale: 4,
    ease: "expo.inOut",
  })
  .to("#load-animation-dot", {
    duration: generalDuration,
    ease: "expo.inOut",
    left: "100%",
    scale: 1,
    backgroundColor: "#22d3ee",
    y: "55%",
  })
  .to("#load-animation-dot", {
    duration: 1,
    ease: "expo.inOut",
    left: "100%",
    scale: 1,
  })
  .to("#load-animation-dot", {
    duration: generalDuration,
    left: "120%",
    scale: 4,
    y: "0%",
    ease: "expo.inOut",
  })
  .to("#load-animation-dot", {
    duration: generalDuration,
    left: "-200",
    ease: "expo.inOut",
  })
  .to("#load-animation-dot", {
    duration: generalDuration,
    left: "300%",
    ease: "expo.inOut",
  });

let t3 = gsap.timeline();
t3.to("#load-animation-bg", {
  duration: generalDuration,
  x: "100%",
  ease: "expo.inOut",
  delay: 4,
});

let t4 = gsap.timeline();
let t5 = gsap.timeline();
let t6 = gsap.timeline();

t4.to("h1 span:nth-child(1)", {
  duration: 0.75,
  x: 0,
  skewX: 0,
  opacity: 1,
  ease: "expo.inOut",
  delay: 4.5,
});

t5.to("h1 span:nth-child(2)", {
  duration: 0.75,
  opacity: 1,
  ease: "expo.inOut",
  delay: 4.5,
});

t6.to("h1 span:nth-child(3)", {
  duration: 0.75,
  x: 0,
  skewX: 0,
  opacity: 1,
  ease: "expo.inOut",
  delay: 4.5,
});

const button = document.querySelector(
  'button[data-collapse-toggle="navbar-default"]',
);
const navbar = document.getElementById("navbar-default");

button.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
});

const aboutCources = document.querySelector(".about.courses");
const aboutInitiatives = document.querySelector(".about.initiatives");
const aboutIndustry = document.querySelector(".about.industry");

gsap.set(".about.courses p", { opacity: 0, y: 40 });
gsap.set(".about.initiatives p", { opacity: 0, y: 40 });
gsap.set(".about.industry p", { opacity: 0, y: 40 });
gsap.set(".about.courses h2", { y: 40 });
gsap.set(".about.initiatives h2", { y: 40 });
gsap.set(".about.industry h2", { y: 40 });

let revealAboutCources = gsap.to(".about.courses p, .about.courses h2", {
  paused: true,
  opacity: 1,
  y: 0,
  duration: 0.25,
});

let revealAboutInitiatives = gsap.to(
  ".about.initiatives p, .about.initiatives h2",
  {
    paused: true,
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
);

let revealAboutIndustry = gsap.to(".about.industry p, .about.industry h2", {
  paused: true,
  opacity: 1,
  y: 0,
  duration: 0.25,
});

gsap.set(".about-images > *", {
  height: 0,
});

let revealCoursesImages = gsap.from(".about-images .courses", {
  height: 300,
  duration: 1,
  ease: "ease.inOut",
});

let revealInitiativesImages = gsap.from(".about-images .initiatives", {
  height: 300,
  duration: 1,
  ease: "ease.inOut",
});

let revealIndustryImages = gsap.from(".about-images .industry", {
  height: 300,
  duration: 1,
  ease: "ease.inOut",
});

aboutCources.addEventListener("mouseenter", () => {
  revealAboutCources.play();
  revealCoursesImages.reverse();
});
aboutCources.addEventListener("mouseleave", () => {
  revealAboutCources.reverse();
  revealCoursesImages.play();
});

aboutInitiatives.addEventListener("mouseenter", () => {
  revealAboutInitiatives.play();
  revealInitiativesImages.reverse();
});

aboutInitiatives.addEventListener("mouseleave", () => {
  revealAboutInitiatives.reverse();
  revealInitiativesImages.play();
});

aboutIndustry.addEventListener("mouseenter", () => {
  revealAboutIndustry.play();
  revealIndustryImages.reverse();
});

aboutIndustry.addEventListener("mouseleave", () => {
  revealAboutIndustry.reverse();
  revealIndustryImages.play();
});

const about2Test = document.querySelector(".about-2.test");
const about2Evaluate = document.querySelector(".about-2.evaluate");
const about2Adopt = document.querySelector(".about-2.adopt");

gsap.set(".about-2.test p", { opacity: 0, y: 40 });
gsap.set(".about-2.evaluate p", { opacity: 0, y: 40 });
gsap.set(".about-2.adopt p", { opacity: 0, y: 40 });
gsap.set(".about-2.test h2", { y: 40 });
gsap.set(".about-2.evaluate h2", { y: 40 });
gsap.set(".about-2.adopt h2", { y: 40 });

let revealAbout2Test = gsap.to(".about-2.test p, .about-2.test h2", {
  paused: true,
  opacity: 1,
  y: 0,
  duration: 0.25,
});

let revealAbout2Evaluate = gsap.to(
  ".about-2.evaluate p, .about-2.evaluate h2",
  {
    paused: true,
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
);

let revealAbout2Adopt = gsap.to(".about-2.adopt p, .about-2.adopt h2", {
  paused: true,
  opacity: 1,
  y: 0,
  duration: 0.25,
});

gsap.set(".about-2-images > *", {
  height: 0,
});

let revealTestImages = gsap.from(".about-2-images .test", {
  height: 300,
  duration: 1,
  ease: "ease.inOut",
});

let revealEvaluateImages = gsap.from(".about-2-images .evaluate", {
  height: 300,
  duration: 1,
  ease: "ease.inOut",
});

let revealAdoptImages = gsap.from(".about-2-images .adopt", {
  height: 300,
  duration: 1,
  ease: "ease.inOut",
});

about2Test.addEventListener("mouseenter", () => {
  revealAbout2Test.play();
  revealTestImages.reverse();
});

about2Test.addEventListener("mouseleave", () => {
  revealAbout2Test.reverse();
  revealTestImages.play();
});

about2Evaluate.addEventListener("mouseenter", () => {
  revealAbout2Evaluate.play();
  revealEvaluateImages.reverse();
});

about2Evaluate.addEventListener("mouseleave", () => {
  revealAbout2Evaluate.reverse();
  revealEvaluateImages.play();
});

about2Adopt.addEventListener("mouseenter", () => {
  revealAbout2Adopt.play();
  revealAdoptImages.reverse();
});

about2Adopt.addEventListener("mouseleave", () => {
  revealAbout2Adopt.reverse();
  revealAdoptImages.play();
});

document.querySelectorAll(".slidein").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    delay: 0.5,
  });
});

const slideups = document.querySelectorAll("[id^='slideup-']");

slideups.forEach((timeline, index) => {
  gsap.from(timeline, {
    scrollTrigger: {
      trigger: timeline,
      start: "top bottom",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    delay: index * 0.5,
  });
});

const timelines = document.querySelectorAll("[id^='timeline-']");

timelines.forEach((timeline, index) => {
  gsap.from(timeline, {
    scrollTrigger: {
      trigger: timeline,
      start: "top bottom",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    delay: index * 0.5,
  });
});

const flowchartLines1 = document.querySelectorAll(
  "[id^='flowchartlinegroup'] [id^='flowchartline1']",
);

flowchartLines1.forEach((line, index) => {
  gsap.set(line, {
    strokeDasharray: 300,
    strokeDashoffset: 600,
  });

  gsap.to(line, {
    strokeDashoffset: 0,
    repeat: -1,
    duration: 5,
    ease: "linear",
    delay: index * 0.5,
  });
});
const flowchartLines2 = document.querySelectorAll(
  "[id^='flowchartlinegroup'] [id^='flowchartline2']",
);

flowchartLines2.forEach((line, index) => {
  gsap.set(line, {
    strokeDasharray: 200,
    strokeDashoffset: 400,
  });

  gsap.to(line, {
    strokeDashoffset: 0,
    repeat: -1,
    duration: 5,
    ease: "linear",
    delay: index * 0.5,
  });
});
