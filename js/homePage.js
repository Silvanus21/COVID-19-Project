document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        const html = document.querySelector("html")
        html.style.opacity = 1   
    }, 700)

    includeHTML();
    const videoElement = document.querySelector("#video")
    videoElement.playbackRate = 0.75

})