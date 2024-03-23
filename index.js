const woven = document.querySelector('.woven');

woven.addEventListener('mouseover', () => {
    woven.setAttribute('src', './images/scary.png');
    $('.btn3').addClass('active');
});

woven.addEventListener('mouseleave', () => {
    woven.setAttribute('src', './images/gallery4.png');
    $('.btn3').removeClass('active');
});

const reimagine = document.querySelector('.reimagine');

reimagine.addEventListener('mouseover', () => {
    reimagine.setAttribute('src', './images/smile.png');
    $('.btn2').addClass('active');
});

reimagine.addEventListener('mouseleave', () => {
    reimagine.setAttribute('src', './images/gallery3.png');
    $('.btn2').removeClass('active');
});

const bade = document.querySelector('.bade');

bade.addEventListener('mouseover', () => {
    bade.setAttribute('src', './images/bade.png');
    $('.btn1').addClass('active');
});

bade.addEventListener('mouseleave', () => {
    bade.setAttribute('src', './images/featured.png');
    $('.btn1').removeClass('active');
});

const newsletter = document.querySelector('.newsletter');

newsletter.addEventListener('mouseover', () => {
    $('.img1').addClass('news-img1');
    $('.img2').addClass('news-img2');
});

newsletter.addEventListener('mouseleave', () => {
    $('.img1').removeClass('news-img1');
    $('.img2').removeClass('news-img2');
});