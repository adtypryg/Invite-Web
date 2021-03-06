const namaUndangan = document.querySelector(".welcome-page__undangan");
const param = new URLSearchParams(window.location.search).get('u');

namaUndangan.innerHTML = param;


const welcomePage = document.querySelector(".welcome-page");
const page1Image = document.querySelector(".page1__image img");
const page1Name = document.querySelector(".page1__name");
const page1Tanggal = document.querySelector(".page1__tanggal");
const page1Bismillah = document.querySelector(".page1__bismillah img");
const page1Sentence = document.querySelector(".page1__sentence");

welcomePage.addEventListener('click', e => {
  if (e.target.className === 'buka-undangan'){
    welcomePage.classList.add('opened');
    // to always show the first page after refresh
    document.body.style.overflowY = "auto";
    document.body.style.position = "relative";

    // animation page 1
    page1Image.classList.add('opened');
    page1Name.classList.add('opened');
    page1Tanggal.classList.add('opened');
    page1Bismillah.classList.add('opened');
    page1Sentence.classList.add('opened');
  };
});

// animation page 2
const avaFeni = document.querySelector(".page2__container1 .ava-feni");
const nameFeni = document.querySelector(".page2__container1 .feni");
const avaYoga = document.querySelector(".page2__container1 .ava-yoga");
const nameYoga = document.querySelector(".page2__container1 .yoga");
const nameWali = document.querySelectorAll(".page2__container2");

const viewHeight = visualViewport.height;

window.addEventListener('scroll', e => {
  // console.log(window.pageYOffset);
  if (window.scrollY > 0.7 * viewHeight){
    avaFeni.classList.add('scrolled');
    nameFeni.classList.add('scrolled');
    nameWali[0].classList.add('scrolled');
  };

  if (window.scrollY > 0.85 * viewHeight){
    avaYoga.classList.add('scrolled');
    nameYoga.classList.add('scrolled');
    nameWali[1].classList.add('scrolled');

  };
});


