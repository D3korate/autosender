const selectSingle = document.querySelectorAll('.__select');


for (let i = 0; i < selectSingle.length; i++) {
  const selectSingle_title = selectSingle[i].querySelector('.__select__title');
  const selectSingle_labels = selectSingle[i].querySelectorAll('.__select__label');

  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle[i].getAttribute('data-state')) {
      selectSingle[i].setAttribute('data-state', '');
    } else {
      selectSingle[i].setAttribute('data-state', 'active');
    }
  });

  for (let x = 0; x < selectSingle_labels.length; x++) {
    selectSingle_labels[x].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle[i].setAttribute('data-state', '');
    });
  }

}

