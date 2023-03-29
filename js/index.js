// on récupère l'élèment HTML balise a pour pouvoir ajouter la class open au click

let burgerBtn = document.querySelector('.link-burger');

//on récupère l'élèment Html balise ul avec le menu pour ajouter la classe open au click sur l'élèment burgerBtn

let navbarLinks = document.querySelector('.navbar-links ul');

if (burgerBtn && navbarLinks) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('open');
        navbarLinks.classList.toggle('open');
    })
  }