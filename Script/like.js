/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
/* Met behulp van student Britt Klijn */

var heart = document.querySelector('main  svg');
var text = document.querySelector('main ul li span');


function animate() {
    heart.classList.add('animate');
    text.textContent = '570';
}

heart.addEventListener('click', animate);
