import MainHandler from './MainHandler'

// Можно лучше: думаю можно убрать исключения линтовшика
/* eslint-disable */


// Можно лучше: название "modalsHandler" не отражает функционал объекта.
// Объект называется "modalsHandler", но работаем мы с auth-form, а
// вещаем обработчики событий на document.body, здесь можно очень легко запутаться)

export const modalsHandler = new MainHandler(
  document.body,
  {
    click: (event) => {
      // Надо исправить: на мой взгляд будет правильнее вещать обработчик нажатия на
      // сам блок <div id="modal">. К тому же в обработчике мы проверяем
      // содержит ли body класс "auth-form__wrapper", но в разметке нигде не указан
      // данный класс, а в скриптах не добавляется ни к какому элементу!
      // Как я понял, у Вас отображение модальных окон работает от обратного,
      // Вы добавляете "auth-form__wrapper_hide" к тем окнам, которые нужны скрывать,
      // стоит учитывать это!

      // Можно лучше: вместо Array.from и includes, можно использовать
      // метод contains() объекта classList
      if (Array.from(event.target.classList).includes('auth-form__wrapper')) {
        event.target.classList.add('auth-form__wrapper_hide');
        document.body.classList.remove('scroll-lock');
      }
    },
    keydown: (event) => {
      if (Array.from(event.target.classList).includes('scroll-lock')) {
        if (event.code === 'Escape') {
          const modals = Array.from(event.target.querySelectorAll('.auth-form__wrapper'));
          // Надо исправить: метод find() может вернуть undefined,
          // если условие не сработает, тогда нужно сделать дополнительные
          // проверки до того, как взаимодействовать с результатом данного метода!

          // Можно лучше: метод includes() возвращает булевое значение,
          // так что тернарный оператор здесь лишний
          modals.find(
            (element) => Array.from(element.classList)
              .includes('auth-form__wrapper_hide') ? false : true,
          ).classList.add('auth-form__wrapper_hide')
          document.body.classList.remove('scroll-lock')
        }
      }
    },
  },
)
