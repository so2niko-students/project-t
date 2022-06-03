import AuthView from "./components/AuthView.js";
import MenuView from './components/MenuView.js'    


// collect all (probably) Views
const authViewContainer = document.getElementById('authView');
const menuViewContainer = document.getElementById('menuView');   

AuthView(authViewContainer);
MenuView(menuViewContainer);   

