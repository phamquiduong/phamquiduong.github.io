// Auto switch theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
const setTheme = () => {
  const theme = prefersDark.matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme)
}
setTheme()
prefersDark.addEventListener('change', setTheme)

// Set space
const avatar = document.querySelector('.avatar')
const profileSpace = document.querySelector('.profile-space')

window.onload = function () {
  profileSpace.style.height = (avatar.offsetHeight * 0.30) + 'px'
}
