const avatar = document.querySelector('#avatar')
const profileSpace = document.querySelector('#profile-space')
const setProfileSpace = () => profileSpace.style.height = (avatar.offsetHeight * 0.30) + 'px'
setProfileSpace()
window.addEventListener('resize', setProfileSpace)
