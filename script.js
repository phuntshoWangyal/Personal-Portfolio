document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 70) {
        nav.style.backgroundColor = 'black';
    }
    else {
        nav.style.backgroundColor = 'transparent';
    }
})



