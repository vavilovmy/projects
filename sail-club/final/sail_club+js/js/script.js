let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active')
}

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThemeButton.classList.add('active');
}

serifButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifButton.classList.remove('active');
    serifButton.classList.add('active')
}

sansSerifButton.onclick = function () {
    document.body.classList.remove('serif');
    serifButton.classList.remove('active');
    sansSerifButton.classList.add('active')
}

let articles = document.querySelectorAll('.blog-article')

for (let article of articles) {
    let moreButton = article.querySelector('.more')
    moreButton.onclick = function ()  {
        article.classList.remove('short')
    }
}

let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

gridButton.onclick = function () {
    cards.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
}

listButton.onclick = function () {
    cards.classList.add('list');
    gridButton.classList.remove('active');
    listButton.classList.add('active');   
}

let previews = document.querySelectorAll('.preview-list a')
let activeImage = document.querySelector('.active-photo')

for (let preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault();
        activeImage.src = preview.href;
        let currentActive = document.querySelector('.preview-list li .active-item');
        currentActive.classList.remove('active-item');
        preview.classList.add("active-item");
    }
}