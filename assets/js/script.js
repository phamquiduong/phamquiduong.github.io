// Set avatar space
const avatar = document.querySelector('.avatar')
const profileSpace = document.querySelector('.profile-space')

window.onload = function () {
  profileSpace.style.height = (avatar.offsetHeight * 0.30) + 'px'
}


// Certificate image
const certificateTitle = document.querySelector('#certificateTitle')
const certificateImage = document.querySelector('#certificateImage')
const certificateModalBtn = document.querySelector('#certificateModalBtn')

function openCertificateModal(title, imgSrc) {
  certificateTitle.textContent = title
  certificateImage.src = imgSrc
  certificateModalBtn.click()
}

// Handle event click
const certificateDUTEngineer = document.querySelector('#certificateDUTEngineer')
const certificateTKPSecondPrize = document.querySelector('#certificateTKPSecondPrize')
const certificateTKPFirstPrize = document.querySelector('#certificateTKPFirstPrize')

certificateDUTEngineer.addEventListener(
  'click',
  () => openCertificateModal(
    'Kỹ sư công nghệ thông tin khóa 2017',
    'assets/img/certifications/dut.jpg'
  )
)

certificateTKPSecondPrize.addEventListener(
  'click',
  () => openCertificateModal(
    'Giải nhì HSG Tin cấp tỉnh Quảng Ngãi lớp 12',
    'assets/img/certifications/tkp-12.jpg'
  )
)

certificateTKPFirstPrize.addEventListener(
  'click',
  () => openCertificateModal(
    'Giải nhất HSG Tin cấp tỉnh Quảng Ngãi lớp 11',
    'assets/img/certifications/tkp-11.jpg'
  )
)
