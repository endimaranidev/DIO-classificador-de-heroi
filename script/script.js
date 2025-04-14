let heroInput = document.querySelector(".hero-data__name");
let expInput = document.querySelector(".hero-data__exp");
let button = document.querySelector(".hero-data__button");
let heroClass = document.querySelector(".hero-classification");
let heroImg = document.querySelector("#hero-img");

function getHeroName() {
	return heroInput.value
}

function getHeroExp() {
	return expInput.value
}


button.addEventListener('click', () =>{
    let name = getHeroName()

    let exp = getHeroExp()

    if (exp <= 1000) {
        heroImg.setAttribute('src', './assets/images/heroi_ferro.png')
        heroClass.innerHTML = `${name} é do nível <span class="iron">Ferro</span>`
    } else if (exp <= 2000) {
        heroImg.setAttribute('src', './assets/images/heroi_bronze.jpeg')
        heroClass.innerHTML = `${name} é do nível <span class="bronze">Bronze</span>`
    } else if (exp <= 5000) {
        heroImg.setAttribute('src', './assets/images/heroi_prata.jpeg')
        heroClass.innerHTML = `${name} é do nível <span class="silver">Prata</span>`
    } else if (exp <= 7000) {
        heroImg.setAttribute('src', './assets/images/heroi_ouro.jpeg')
        heroClass.innerHTML = `${name} é do nível <span class="gold">Ouro</span>`
    } else if (exp <= 8000) {
        heroImg.setAttribute('src', './assets/images/heroi_platina.jpeg')
        heroClass.innerHTML = `${name} é do nível <span class="platinum">Platina</span>`
    } else if (exp <= 9000) {
        heroImg.setAttribute('src', './assets/images/heroi_ascendente.jpeg')
        heroClass.innerHTML = `${name} é do nível <span class="ascending">Ascendente</span>`
    } else if (exp <= 10000) {
        heroImg.setAttribute('src', './assets/images/heroi_imortal.jpeg')
        heroClass.innerHTML = `${name} é do nível <span class="imortal">Imortal</span>`
    } else if (exp >= 10001) {
        heroImg.setAttribute('src', './assets/images/heroi_radiante.jpeg')
        heroClass.innerHTML = `${name} é do nível <span class="radiant">Radiante</span>`
    } 
})