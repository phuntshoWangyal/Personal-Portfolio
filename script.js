document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    nav.classList.toggle('scrolled', scroll_position > 70);
})



