// Set space
const avatar = document.querySelector('.avatar')
const profileSpace = document.querySelector('.profile-space')

window.onload = function () {
  profileSpace.style.height = (avatar.offsetHeight * 0.30) + 'px'
}
