import './menu.css'
import MainHandler from '../main/MainHandler'
import Overlay from '../main/overlay/overlay'

class Menu {
  constructor(
    {
      control, items, menu,
    },
    overlayObject,
  ) {
    this.menuOpened = false
    this.overlay = overlayObject
    this.menuItems = document.querySelector(items)
    this.menuControl = document.querySelector(control)
    this.menu = document.querySelector(menu)
    // Можно лучше: есть ощущение, что this.menuMobile будет всегда принимать
    // ложное значение, так как "menu_black" нигде в коде не используется
    this.menuMobile = Array.from(this.menu.classList).includes('menu_black')
  }

  click() {
    if (this.menuOpened) {
      this.close()
    } else {
      this.open()
    }
  }

  // Далее в коде стоит учитывать тот факт, что this.menuMobile всегда
  // будет иметь ложное значение и некоторые кусочки кода никогда не выполняться.
  open() {
    this.menuControl.classList.add('menu__mobile_close')
    if (this.menuMobile) this.menuControl.classList.add('menu__mobile_close_black')
    this.overlay.show()
    this.menu.classList.add(!this.menuMobile ? 'menu_on-top' : 'menu_on-top_black')
    this.menuItems.classList.add('menu__items-list_show')
    if (this.menuMobile) this.menuItems.style.background = 'rgba(255,255,255,1)'
    this.menuOpened = true
  }

  close() {
    this.menuControl.classList.remove('menu__mobile_close')
    this.overlay.hide()
    // Можно лучше: можно написать в одну строчку: .remove('menu_on-top', 'menu_on-top_black')
    this.menu.classList.remove('menu_on-top')
    this.menu.classList.remove('menu_on-top_black')
    this.menuItems.classList.remove('menu__items-list_show')
    if (this.menuMobile) this.menuItems.style.background = 'rgba(255,255,255,0)'
    this.menuOpened = false
  }
}

const overlay = new Overlay()

export const mainMenu = new Menu(
  {
    control: '.menu__mobile',
    items: '.menu__items-list',
    menu: '.menu',
  },
  overlay,
)

export const menuHandler = new MainHandler(
  document.querySelector('.menu__mobile'),
  {
    click: () => {
      mainMenu.click()
    },
  },
)
