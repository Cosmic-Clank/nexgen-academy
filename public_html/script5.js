gsap.registerPlugin(ScrollTrigger);

const button = document.querySelector(
  'button[data-collapse-toggle="navbar-default"]',
);
const navbar = document.getElementById("navbar-default");

button.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
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
    delay: 0.3,
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
    delay: index * 0.2,
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
    delay: index * 0.2,
  });
});
