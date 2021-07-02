const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', (event) => {
    hamburger.classList.toggle('open');
    const content = document.getElementById('content')
    content.classList.toggle('visible')
    const isPresent = content.classList.contains('visible');
    const body = document.querySelector('body')
    if (isPresent) {
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflowY = 'scroll'
    }
})