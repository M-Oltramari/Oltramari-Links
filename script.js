function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")

  const imgSrc = html.classList.contains("light")
    ? "./assets/moltra.png"
    : "./assets/moltracopy.png"
  img.setAttribute("src", imgSrc)
}
