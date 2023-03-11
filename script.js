let t1 = gsap.timeline();

t1.to(".reveal-text--1", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  y: 50,
  opacity: 1,
  stagger: 0.4,
  duration: 1,
})
  .to(".reveal-text--1", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
  })
  .to(".reveal-text--2", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    opacity: 1,
    y: "-7rem",
    duration: 4,
    ease: "ease.in",
  })
  .to(
    ".features > *",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      duration: 2,
    },
    "-=3"
  );

const imgOut = document.querySelector(".img-out");

const myText = new SplitType(".uttam");
let t2 = gsap.timeline({ paused: true });
t2.to(".bg--2", {
  clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  duration: 2,
}).to(
  ".char",
  {
    y: 30,
    opacity: 1,
    stagger: 0.1,
    duration: 0.3,
  },
  "-=2"
);

imgOut.addEventListener("mouseover", function () {
  console.log("mouseover");
  t2.play();
});
