import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
<<<<<<< HEAD
import initFetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
=======
import fetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
>>>>>>> refatorar-fetch-animais
import initAnimacaoScroll from './modules/scroll-animacao.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();


initDropdownMenu();
initMenuMobile();
initFuncionamento();
<<<<<<< HEAD
initFetchAnimais();
initAnimacaoScroll();

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
=======
initFetchBitcoin();
initAnimacaoScroll();


fetchAnimais('../../animaisapi.json', '.numeros-grid')
>>>>>>> refatorar-fetch-animais
