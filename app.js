"use strict";
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const overlay = document.querySelector("#nav-overlay");
const navlist = document.querySelector(".nav__list");
let midSection = document.querySelector(".mid-section");
let gallery = document.querySelector(".gallery");

open.addEventListener("click", function (e) {
  overlay.classList.add("nav-overlay");

  this.classList.remove("show-ham");
  close.style.display = "block";

  navlist.classList.remove("show");
});
close.addEventListener("click", function (e) {
  overlay.classList.remove("nav-overlay");
  this.style.display = "none";
  open.classList.add("show-ham");
  navlist.classList.add("show");
});

// Squencing in gsap (( Timeline))

var tl = gsap.timeline();
tl.from(".hero-box", {
  duration: 1,
  opactiy: 0,
  scale: 0.3,
  ease: "ease-in",
});

midSection.style.visibility = "hidden";
var observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      midSection.style.visibility = "visible";
      tl.from(".mid-section", {
        duration: 1.5,
        x: -300,
        opactiy: 0,
        scale: 0.5,
        ease: "bounce",
      });
      observer.unobserve(midSection);
    }
  },
  {
    threshold: 0.6,
  }
);
observer.observe(midSection);

var observer1 = new IntersectionObserver((entries, options) => {
  // console.log(entries);
  if (entries[0].isIntersecting) {
    tl.from(".card", {
      duration: 1,
      opactiy: 0,
      scale: 0.3,
      ease: "bounce",
      //   stagger: { each: 0.25, amount: 2, from: "end" },
      stagger: 0.3,
    });
    observer1.unobserve(gallery);
  }
});
observer1.observe(gallery);
