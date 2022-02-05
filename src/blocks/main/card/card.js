// Можно лучше: не думаю, что есть смысл в этом исключении.
/* eslint-disable class-methods-use-this */
import './card.css'

export default class Card {
  constructor(card) {
    this.card = card;
    // Можно лучше: у Вас реализован класс MainHandler для облегчения работы
    // с обработчиками! Думаю здесь можно использовать именно его :)
    this.card.addEventListener('click', (event) => { this.click(event) })
  }

  click(event) {
    if (event.target.className.includes('card__icon')) event.preventDefault()
  }
}
