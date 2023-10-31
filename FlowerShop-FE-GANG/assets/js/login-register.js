/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Animation repeat
})

sr.reveal(`.title-login, .title-register`)

sr.reveal(`.login__form`, {origin: 'left'})
sr.reveal(`.register__form`, {origin: 'right'})