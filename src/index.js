import './style.css';
import printMe from './new.js';

printMe()

let lichaam = document.querySelector('body');

let pee = document.createElement('p')
pee.textContent = 'Dit is rood';
lichaam.appendChild(pee);