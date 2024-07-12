gsap.registerPlugin(ScrollTrigger);

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

const button = document.querySelector(
  'button[data-collapse-toggle="navbar-default"]',
);
const navbar = document.getElementById("navbar-default");

button.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
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
