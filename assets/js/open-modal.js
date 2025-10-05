const certificateTitle = document.querySelector('#certificateTitle')
const certificateImage = document.querySelector('#certificateImage')
const certificateModalBtn = document.querySelector('#certificateModalBtn')

function openCertificateModal(title, imgSrc) {
  certificateTitle.textContent = title
  certificateImage.src = imgSrc
  certificateModalBtn.click()
}
