const welcomePage = document.querySelector(".welcome-page");

welcomePage.addEventListener('click', e => {
  if (e.target.className === 'buka-undangan'){
    welcomePage.classList.add('opened');
    // to always show the first page after refresh
    document.body.style.overflowY = "auto";
    document.body.style.position = "relative";
  };
});