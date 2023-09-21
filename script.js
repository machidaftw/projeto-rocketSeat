const page = document.documentElement
const btn = document.querySelector("button")
const profileImg = document.querySelector("#profile img")

btn.addEventListener("click", () => {
  page.classList.toggle("light")

  if (page.classList.contains("light")) {
    profileImg.setAttribute("src", "./assets/avatar.png")
    profileImg.setAttribute("alt", "Foto de joao vitor sorrindo")
  } else {
    profileImg.setAttribute("src", "./assets/quebranozes.png")
    profileImg.setAttribute("alt", "Foto do quebra nozes")
  }
})
