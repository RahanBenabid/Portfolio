document.querySelector("#side-projects .toggle")
    .addEventListener("click", e => {
      const open = e.currentTarget.closest("section").classList.toggle("open");
      e.currentTarget.setAttribute("aria-expanded", open);
    });

// current year
document.querySelector("#current-year").textContent = new Date().getFullYear();

// live time
function update() {
  const now = new Date();
  const parts = new Intl
                    .DateTimeFormat("en-GB", {
                      timeZone : "Europe/Paris",
                      hour : "2-digit",
                      minute : "2-digit",
                      second : "2-digit",
                      hour12 : false
                    })
                    .formatToParts(now);

  const time = Object.fromEntries(parts.map(p => [p.type, p.value]));

  document.getElementById("hour").textContent = time.hour;
  document.getElementById("min").textContent = time.minute;
  document.getElementById("sec").textContent = time.second;
}

window.addEventListener("load", () => {
  update();
  setInterval(update, 1000);
});

// honka
const gopher = document.getElementById("gopher");
const honk = new Audio("resources/audio/honka.mp3");

// honk.preload = "auto";

gopher.addEventListener("click", () => {
  gopher.classList.remove("squish");
  void gopher.offsetWidth;
  gopher.classList.add("squish");
  honk.currentTime = 0; // restart if clicked mid-playback
  honk.play();
});

gopher.addEventListener("animationend",
                        () => { gopher.classList.remove("squish"); })
