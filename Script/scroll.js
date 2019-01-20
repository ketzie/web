/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*Met behulp van
    https://stackoverflow.com/questions/23782522/hide-show-image-after-2-seconds
    https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
*/

/*De afbeelding van het vliegtuig wordt in deze div gestopt*/
var imgShow = document.querySelector('body > div');

//Deze functie zorgt dat de afbeelding van het vliegtuig verdwijnt
function noShowVliegtuigImage() {
    imgShow.classList.add('vliegtuigNoShow');
}

/*Deze functie zorgt dat de funcite noShowVliegtuigImage na 2 seconde wordt geactiveerd*/
function noShowVliegtuig() {
    // 2000 = 2 seconde
    setTimeout( noShowVliegtuigImage, 2000);
}


/*Deze functie zorgt dat de gebruiker boven aan de pagina komt*/
function scrollToTop() {
    window.scrollTo(0, 0);
    //Laat het vliegtuig zien
    imgShow.innerHTML = '<img src="Images/vliegtuig.png" alt"bla" class="vliegtuigShow">';
    //Hier roep ik de functie noShowVliegtuig aan
    noShowVliegtuig();
}
//Hier roep ik de functie aan wanneer de gebruiker klikt op de ga naar bovenknop
document.querySelector('.vliegtuig').addEventListener('click', scrollToTop);

