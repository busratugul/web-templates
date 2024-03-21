let swiper = new Swiper('#swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // Kullanıcı etkileşimi ile kaydırmayı devre dışı bırakma
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

swiper = new Swiper('#swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

document.querySelector('#card1').addEventListener('click', () => {
  window.open('https://www.turkcell.com.tr/gonulbagi', '_blank')
})

document.querySelector('#card2').addEventListener('click', () => {
  window.open(
    'https://medya.turkcell.com.tr/bulletins/afad-acil-mobil-uygulamasinin-altyapisi-turkcell-guvencesinde/',
    '_blank'
  )
})
document.querySelector('#card3').addEventListener('click', () => {
  window.open(
    'https://medya.turkcell.com.tr/bulletins/gonul-bagi-ile-hatayda-yuzlerce-kisiye-is-binlerce-kisiye-egitim/',
    '_blank'
  )
})

document.querySelector('#card4').addEventListener('click', () => {
  window.open(
    'https://medya.turkcell.com.tr/bulletins/bipin-acil-durum-butonu-hayata-bagliyor/',
    '_blank'
  )
})

document.querySelector('#card5').addEventListener('click', () => {
  window.open(
    'https://medya.turkcell.com.tr/bulletins/yogun-kar-yagisina-1300-kisilik-ekip/',
    '_blank'
  )
})

document.querySelector('#card6').addEventListener('click', () => {
  window.open(
    'https://medya.turkcell.com.tr/bulletins/izmir-depreminin-kahramanlarina-iletisim-destegi/',
    '_blank'
  )
})

document.querySelector('#card7').addEventListener('click', () => {
  window.open(
    'https://medya.turkcell.com.tr/bulletins/turkcellden-giresuna-paycell-ile-yardim-eli/',
    '_blank'
  )
})
