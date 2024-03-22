const woven = document.querySelector('.woven');

woven.addEventListener('mouseover', () => {
    woven.setAttribute('src', './images/scary.png');
});

woven.addEventListener('mouseleave', () => {
    woven.setAttribute('src', './images/gallery4.png');
});

const reimagine = document.querySelector('.reimagine');

reimagine.addEventListener('mouseover', () => {
    reimagine.setAttribute('src', './images/smile.png');
});

reimagine.addEventListener('mouseleave', () => {
    reimagine.setAttribute('src', './images/gallery3.png');
});

const bade = document.querySelector('.bade');

bade.addEventListener('mouseover', () => {
    bade.setAttribute('src', './images/bade.png');
});

bade.addEventListener('mouseleave', () => {
    bade.setAttribute('src', './images/featured.png');
});