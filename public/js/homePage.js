document.addEventListener("DOMContentLoaded", () => {
 
    setTimeout(() => {
        const lw = document.getElementById("loader-wrapper")
        lw.style.opacity = 0
        setTimeout(() => {
          lw.style.display = "none";
        }, 2000)
    }, 1500)

    includeHTML()

  (document.querySelector("#video").playbackRate = 0.8);
  const e = ScrollReveal({ reset: !1 });
  e.reveal(".home-box-content", {
    delay: 200,
    origin: "bottom",
    duration: 800,
    interval: 300,
    scale: 0.15,
    opacity: 0,
  }),
    e.reveal(".img", {
      delay: 150,
      scale: 0.2,
      opacity: 0,
      interval: 200,
      duration: 600,
      easing: "ease-out",
      origin: "bottom",
    });
});
