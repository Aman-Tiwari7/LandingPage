const btnHamburger = document.querySelector("#btnhamburger");
const header  = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click' , () => {
    
    if(header.classList.contains('open')) //Closing menu
    {
        header.classList.remove("open");
        body.classList.remove('no-scroll');
        fadeElems.forEach((element) =>
        {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        })
    }
    else //Opening menu
    {
        header.classList.add("open");
        body.classList.add('no-scroll');
        fadeElems.forEach((element) =>
        {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

        })
    }
})