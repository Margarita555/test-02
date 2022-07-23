const dropdownBtn = document.querySelector('.dropdown__button');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');
dropdownBtn.addEventListener('click', function () {
  dropdownList.classList.toggle('is-visible');
});

dropdownList.addEventListener('click', function (e) {
  e.stopPropagation();
  const formerText = dropdownBtn.innerText;
  dropdownBtn.innerText = e.target.innerText;
  e.target.innerText = formerText;
  dropdownList.classList.remove('is-visible');
});
