function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) => `<li  class="trench-item" >
        <div data-id="${id}" class="trench-item-js js-des js-card js-target">
        <div>
          <div class="card-img-trench js-target" style="background-image:url('${img}'); width: 520px; height: 649px;"></div>
            <p class="name js-target">${name}</p>
            </div>
            <p class="price js-target">${price} ₴</p>
          </div>
      </li>`
      )
      .join('');
  }
  else {
    markup = `<li>
      <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600">
    </li>`;
  }
  list.innerHTML = markup;
}
export { createMarkup };