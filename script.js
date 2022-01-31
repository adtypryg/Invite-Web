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