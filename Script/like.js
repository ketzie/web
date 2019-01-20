var heart = document.querySelector('main svg');
var text = document.querySelector('main ul li span')


function animate() {
    heart.classList.add('animate');
    text.textContent = '570';
}

heart.addEventListener('click', animate);
