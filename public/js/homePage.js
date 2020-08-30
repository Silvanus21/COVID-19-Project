document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const html = document.querySelector("html");
    html.style.opacity = 1;
  }, 700);

  includeHTML();
  const videoElement = document.querySelector("#video");
  videoElement.playbackRate = 0.8;

  const sr = ScrollReveal({ reset: false });
  sr.reveal(".home-box-content", {
    delay: 200,
    origin: "bottom",
    duration: 800,
    interval: 300,
    scale: 0.15,
    opacity: 0
  });
  sr.reveal(".img", {
    delay: 200,
    scale: 0.2,
    opacity: 0,
    interval: 200,
    duration: 600,
    easing: "ease-out",
    origin: "bottom"
  });
});
