/* eslint-disable no-unused-vars */
import './vendor/normalize.css'
import './index.css'
import { menuHandler, mainMenu } from './blocks/menu/menu'

// Можно лучше: здесь вы импортируете modalsHandler по дефолту,
// но в модуле данный  класс экспортируется иначе
//
import modalsHandler from './blocks/main/modalsHandler'
import Card from './blocks/main/card/card'
import { loginForm, signupForm, regComplete } from './blocks/main/auth-form/auth-form'

const cardIconSave = new Card(document.querySelector('.results'))


regComplete.open()

// Можно лучше: думаю здесь можно использовать класс
// MainHandler для элемента window и события onresize
//
window.onresize = () => {
  if (window.innerWidth > 767) mainMenu.close()
};
