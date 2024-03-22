const swiper1 = new Swiper('#swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  /* centeredSlides: true, */
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // Kullanıcı etkileşimi ile kaydırmayı devre dışı bırakma
  },

  breakpoints: {
    // Ekran genişliği 576 pikselden küçükse
    576: {
      slidesPerView: 2,
    },
    // Ekran genişliği 768 pikselden küçükse
    768: {
      slidesPerView: 3,
    },
    // Ekran genişliği 992 pikselden küçükse
    992: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const swiper2 = new Swiper('#swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  autoplay: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // Ekran genişliği 576 pikselden küçükse
    576: {
      slidesPerView: 2,
    },
    // Ekran genişliği 768 pikselden küçükse
    768: {
      slidesPerView: 3,
    },
    // Ekran genişliği 992 pikselden küçükse
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
})

const swiper3 = new Swiper('#swiperX', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  autoplay: false,
  breakpoints: {
    // Ekran genişliği 576 pikselden küçükse
    576: {
      slidesPerView: 2,
    },
    // Ekran genişliği 768 pikselden küçükse
    768: {
      slidesPerView: 3,
    },
    // Ekran genişliği 992 pikselden küçükse
    992: {
      slidesPerView: 4,
    },
  },
})

const swiper4 = new Swiper('#swiperY', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 15,
  autoplay: false,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    820: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
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

document.querySelector(".turkcell-logo").addEventListener("click", () => {
  window.open(
    'https://www.turkcell.com.tr/',
    '_blank'
  )
})
