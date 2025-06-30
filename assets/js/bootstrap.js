// Auto switch theme
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
const setTheme = () => {
  const theme = prefersDark.matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme)
}
setTheme()
prefersDark.addEventListener('change', setTheme)
