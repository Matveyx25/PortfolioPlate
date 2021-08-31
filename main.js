let wrapper = document.querySelector('.ux-wrapper')
let pallete = document.querySelector('.photos-palette__wrapper')
let palleteWrapp = document.querySelector('.photos-palette')
const cards = document.querySelectorAll('#card-img')
const btnCloseModal = document.querySelector('.btn-close')
const modal = document.querySelector('.modal')
let cWidth = window.innerWidth/2
let cHeight = window.innerHeight/2
let x = 0, y = 0, width, height,rx,ry, maxWay
let cardTitle = ''
let cardText = ''
let cardSrc = ''



const mediaQuery = window.matchMedia('(max-width: 768px)')

const drag = () => {
    width = window.innerWidth
    height = window.innerHeight
    if (mediaQuery.matches) {
        pallete.removeEventListener('mousemove', event => {})
        palleteWrapp.style.overflow = 'auto'
        wrapper.style.position = 'fixed'
        modal.style.position = 'fixed'
    }else{
        palleteWrapp.addEventListener('mousemove', event => {
            xpos = (event.clientX * (pallete.clientWidth/width));
            ypos = (event.clientY * (pallete.clientHeight/height));
            
            rx = pallete.stylr.transfotm
            ry = pallete.clientY

            // maxWay = Math.max(Math.abs(rx - xpos), Math.abs(ry - ypos));
            console.log(rx);
            gsap.to(
              ".photos-palette__wrapper", {
                x: -xpos, 
                y: -ypos, 
                // duration: maxWay, 
                // ease: "slow(0.7, 0.7, false)",
                // ease: "power2.out",
                lazy: true});
        })
        palleteWrapp.style.overflow = 'hidden'
        wrapper.style.position = 'relative'
        modal.style.position = 'absolute'
    }
}

window.addEventListener('resize', event => {
    drag()
})

cards.forEach(card => {
    card.addEventListener('click', event => {
        modal.querySelector('.modal__title').innerHTML = event.target.dataset.name
        modal.querySelector('.modal__text').innerHTML = event.target.dataset.text
        modal.querySelector('.modal__img').src = event.target.children[0].src
        modal.classList.add('active')
    })
})

btnCloseModal.addEventListener('click', event => {
    modal.classList.remove('active')
})


drag()


  window.addEventListener('load', () => {
    window.setTimeout(function () {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 500);
    }, 500)
  })
