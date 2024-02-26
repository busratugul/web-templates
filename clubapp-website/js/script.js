//SELECTOR DOMS
const icons = document.querySelectorAll('.icon')
const bodyEl = document.querySelector('body')
const bgContainerEl = document.querySelector('.bgContainer')
const discoverBtn = document.querySelector('#discover')
const firstPage = document.querySelector('#home')
//page2
const secondPage = document.querySelector('#main')
const mobileImgs = document.querySelectorAll('.mobile')
const main = document.querySelector('.main')
const sections = document.querySelector('.sections')
const joinme = document.querySelector('.joinme')
//PAGE3
const thirdPage = document.querySelector('#page3')
const arrowBtn = document.querySelector('.arrow')
const arrowBtn2 = document.querySelector('.arrow2')
const videoEl = document.querySelector('#video')
const textContent = document.querySelector('#textContent')
//PAGE4
const fourthPage = document.querySelector('#joinme')

//Ana sayfa yukleniş
window.addEventListener('load', () => {
  location.href = '#home'
  bgContainerEl.classList.add('animate__fadeIn', 'animate__animated')
  secondPage.style.display = 'none'
  thirdPage.style.display = 'none'
  thirdPage.classList.remove('animate__slideInUp', 'animate__animated')
  fourthPage.style.display = 'none'
})

//keşfet butonu
discoverBtn.addEventListener('click', () => {
  location.href = '#main'
  secondPage.classList.add('animate__slideInDown', 'animate__animated')
  firstPage.style.display = 'none'
  secondPage.style.display = 'block'
  thirdPage.style.display = 'block'
  fourthPage.style.display = 'block'
})

//iconların hareketi
bodyEl.addEventListener('mousemove', () => {
  icons.forEach((icon) => {
    icon.classList.add('animate__tada', 'animate__animated')
  })
})

//IPHONE EKRANLARINI DEĞİŞTİREN FONKSIYON
let mobileImgsArray = Array.from(mobileImgs)
mobileImgs.forEach((mobile) => {
  mobile.addEventListener('click', function (event) {
    const firstEl = mobileImgsArray[0].src

    const selected = event.currentTarget
    const indexImg = parseInt(selected.dataset.index)
    mobileImgsArray[0].src = mobileImgsArray[indexImg].src
    mobileImgsArray[indexImg].src = firstEl
  })
})

//Scroll Kontrolü yapılan fonksiyon
window.addEventListener('scroll', scrollControl)
function scrollControl() {
  const scrollPosition = window.scrollY
  if (scrollPosition > 200) {
    thirdPage.classList.add('animate__slideInUp', 'animate__animated')
  }
}

const videos = [
  {
    name: 'video1.mp4',
    text: 'Club App, öğrencilere okul kulüplerinde düzenlenen etkinliklere kolayca erişim sağlama imkanı sunuyor. Kullanıcılar, farklı kulüpler tarafından organize edilen etkinlikleri tek bir platform üzerinden görebilir, takip edebilir ve katılabilirler.',
  },
  {
    name: 'video2.mp4',
    text: 'Öğrenciler arkadaşlarıyla etkinliklere katılmak için kolayca iletişim kurabilir ve etkinlikler hakkında geri bildirimde bulunabilirler. Club App, aynı şekilde öğrencilerin kendi ilgi alanlarına göre etkinliklerini oluşturup paylaşmasına da olanak tanır.',
  },
  {
    name: 'video3.mp4',
    text: 'Tüm bu özellikler, gençlerin sosyal ilişkilerini güçlendirmelerine ve okul hayatlarını daha verimli ve keyifli hale getirmelerine yardımcı olur. Club App, gençlerin bir araya gelerek birlikte daha anlamlı deneyimler yaşamalarını sağlayarak okul hayatını zenginleştirir ve gençlerin kişisel gelişimlerine destek olur.',
  },
]

//NASIL MI KISMI
let currentIndx = 0
clickInterval = setInterval(newSlider, 8000)

arrowBtn.addEventListener('click', () => {
  newSlider()
  setInterval(clickInterval)
})

function newSlider() {
  if (currentIndx !== 2) {
    currentIndx++
  } else {
    currentIndx = 0
  }

  videoEl.src = `./videos/${videos[currentIndx].name}`
  textContent.innerText = videos[currentIndx].text
}

arrowBtn2.addEventListener('click', () => {
  if (currentIndx === 0) {
    currentIndx = 2
  } else {
    currentIndx--
  }
  videoEl.src = `./videos/${videos[currentIndx].name}`
  textContent.innerText = videos[currentIndx].text
})
