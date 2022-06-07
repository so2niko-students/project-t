import AuthView from "./components/AuthView.js";
import MenuView from './components/MenuView.js'    
import { MessagesView } from "./components/MessagesView.js";

const authViewContainer = document.getElementById('authView');
const menuViewContainer = document.getElementById('menuView');   
const MAIN = document.querySelector(".main");

AuthView(authViewContainer);
MenuView(menuViewContainer);   
MessagesView(MAIN);
