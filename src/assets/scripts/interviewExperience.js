const filters = document.querySelectorAll('.filter')
const contentBox = document.querySelector('#filters #part-two');
const content = document.querySelectorAll('#filters #lower>div')
const closeButton = document.querySelector('#fliter-close-btn');
filters.forEach(filter => {
    filter.addEventListener('click', (event) => {
        content.forEach(element => {
            element.removeAttribute('class');
            element.classList.toggle('hidden');
        })
        const target = filter.getAttribute('id').split('-')[1]
        const targetedElement = document.getElementById(target);
        console.log(targetedElement)
        targetedElement.classList.toggle('hidden')
        if (contentBox.classList.contains('hidden')) {
            contentBox.classList.toggle('hidden')
        }
    })
})
closeButton.addEventListener('click', (event) => {
    contentBox.classList.toggle('hidden')
})