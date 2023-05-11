import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
import ModoOscuro from "./components/modoOscuro.js";
import showModal from "./components/modal.js";
import darkmode from "./components/darkMode.js";

loader();
showMenu();
showCart();
const {db, printProducts} = products(await getProducts());//Se le llama destructuracion

cart(db, printProducts);
showModal(db);
darkmode();
