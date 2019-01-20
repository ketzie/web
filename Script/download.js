var buttonArticle = document.querySelector('article div  ul li button');
var buttonFilter = document.querySelector('form button');
var fieldset = document.querySelector('fieldset');


function filter() {
     fieldset.classList.toggle('show');
}

function checkmark() {
    buttonArticle.classList.toggle('show');
}

buttonArticle.addEventListener('click', checkmark);
buttonFilter.addEventListener('click', filter);
