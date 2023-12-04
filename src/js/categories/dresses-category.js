import { createMarkup } from "../markups/create-markup-dresses";
import { dresses } from '../../../dresses-storage.json';
import '../card-modal/card-modal-dresses';

const { preview } = dresses;
const list = document.querySelector('.js-dresses-list');

createMarkup(preview, list);