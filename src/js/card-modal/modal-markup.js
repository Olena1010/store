import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import icon from '../../images/icon.svg';

function createMarkup(product) {
  const instance = basicLightbox.create(
    `<div class="card-modal">
    <img src="${product.img}" alt="${product.name}" class="card-modal-img"/>
    <div class='card-modal-details'>
        <p class="card-modal-title">${product.name}</p>
        <p class="card-modal-price">${product.price} грн.</p>
        <p class="card-modal-text">Якщо є якісь питання, дзвоніть або пишіть:</p>
        <ul class='icon-card-modal-list'>
        <li>
            <a href="tel:+11(000)111-11-11" class="auth-nav-link link">+11 (000) 111-11-11</a>
        </li>
        </ul>
    </div>
    <button class='card-modal-btn js-add' id='js-card-modal-btn'></button>
    <p class='card-modal-buy'>Вітаємо! Ви додали товар у кошик. Щоб видалити, натисніть кнопку “Видалити з кошику”.</p>
    <button class='card-modal-close' id='js-card-modal-btn-close'>
    <svg class='icon-card-modal-close'><use href='${icon}#icon-closeCross'></use></svg>
    </button>
    </div>`,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();

  document.addEventListener('click', evt => {
    const btnClose = evt.target.closest('#js-card-modal-btn-close');

    if (btnClose) {
      instance.close();
    }
  });
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}

export { createMarkup };