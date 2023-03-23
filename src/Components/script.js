const cursors = document.querySelectorAll('.links');
const cursor = document.querySelector('.cursor');

cursors.forEach(curse => {
    curse.addEventListener('mouseover', e => {
        cursor.classList.add('lin')
    });
    curse.addEventListener('mouseleave', e => {
        cursor.classList.remove('lin')
    })
});