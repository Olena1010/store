import { createMarkup } from "../markups/create-markup-trench";
import { trench } from '../../../trench-storage.json';
import '../card-modal/card-modal-trench';

const { preview } = trench;
const list = document.querySelector('.js-trench-list');

createMarkup(preview, list);