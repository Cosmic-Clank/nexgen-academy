gsap.registerPlugin(ScrollTrigger);

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
