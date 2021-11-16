import './styles/index.css';
import Icon from './angular.svg';

const nameAPP = 'Test';

const img: HTMLImageElement | null = document.querySelector('#angular');
img && (img.src = Icon);
console.log(nameAPP);
