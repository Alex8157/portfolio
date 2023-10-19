export const data = [
  {
    name: "Сайт для поиска книг",
    img: "/images/search-for-books.png",
    description: `React-приложение поиска книг с помощью Google Books API. 
    Поиск осуществляется по названию книги или его части, также доступны фильтры и сортировка. Книги загружаются по 30 штук и подгружаются при нажатии на кнопку в конце списка.
    При нажатии на карточку происходит переход на страницу с более подробным описанием. Приложение адаптировано под мобильные устройства.`,
    stack: "HTML, CSS, JavaScript, React, React Router, MobX, Google Books API",
    deploy: "https://alex8157.github.io/book-search-app/",
    source: "https://github.com/Alex8157/book-search-app",
  },
  {
    name: "Конструктор калькулятора",
    img: "/images/calculator-constructor.png",
    description: `Приложение в режиме редактирования позволяет добавить (drag&drop) любой элемент из левой части в правую (кнопки неактивны), 
    а также перемещать элементы внутри правой части. Двойное нажатие удаляет элемент из правой части. После перехода в режим работы калькулятор функционирует.`,
    stack: "HTML, CSS-modules, JavaScript, React, Redux",
    deploy: "https://alex8157.github.io/calculator-constructor/",
    source: "https://github.com/Alex8157/calculator-constructor",
  },
  {
    name: "Сайт с рецептами",
    img: "/images/cookbook.png",
    description: `Сайт с рецептами различных блюд, разделенных по категориям. 
    Все данные загружаются с сервера. С помощью React Router происходит навигация по страницам.`,
    stack: "HTML, CSS-modules, TypeScript, React, React Router",
    deploy: "https://alex8157.github.io/cookbook/",
    source: "https://github.com/Alex8157/cookbook",
  },
  {
    name: "Сайт с карточками товаров",
    img: "/images/site-with-product-cards.png",
    description: `Сайт, позволяющий просматривать карточки товаров. 
    Выполнен по макетам из Figma. Реализована валидация формы. Сделана подрузка товаров при пролистывании вниз. 
    Реализован функционал по добавлению товаров в конец списка.`,
    stack: "HTML, CSS, JavaScript, React, Fetch API",
    deploy: "https://alex8157.github.io/frontend-developer-test-with-API/",
    source: "https://github.com/Alex8157/frontend-developer-test-with-API",
  },
  {
    name: "Игра сапёр",
    img: "/images/sapper.png",
    description: `Игра сапёр. Добавлена возможность изменять размеры поля и сложность игры. Приложение адаптировано под мобильные устройства.`,
    stack: "HTML, CSS-modules, JavaScript, React, MobX",
    deploy: "https://alex8157.github.io/sapper/",
    source: "https://github.com/Alex8157/sapper",
  },
  // {
  //   name: "Список дел",
  //   img: "/images/task-board.png",
  //   description: `Простой task-board. Список сортируется по дате. Данные хранятся в localStorage, благодаря чему сохраняются при перезагрузке страницы.
  //   Приложение адаптировано под мобильные устройства.`,
  //   stack: "HTML, CSS, JavaScript, React, MobX, antd",
  //   deploy: "https://alex8157.github.io/task-board/",
  //   source: "https://github.com/Alex8157/task-board",
  // },
  {
    name: "Игра змейка",
    img: "/images/snake.png",
    description: `Один из первых моих проектов для браузера - игра змейка на чистом Js.`,
    stack: "HTML, CSS, JavaScript",
    deploy: "https://alex8157.github.io/Snake/",
    source: "https://github.com/Alex8157/Snake",
  },
  // {
  //   name: "Таблица с данными",
  //   img: "/images/information-table.png",
  //   description: `Таблица, загружающая данные о пользователях через ARI. Нажав на строку можно увидеть более полную информацию, 
  //   а при нажатии на верхнее поле таблицы происходит сортировка по выбранному параметру. Приложение адаптировано под мобильные устройства.`,
  //   stack: "HTML, CSS, JavaScript, React, Fetch API",
  //   deploy: "https://alex8157.github.io/information-table/",
  //   source: "https://github.com/Alex8157/information-table",
  // },
  {
    name: "Торговый терминал",
    img: "/images/trading-terminal.png",
    description: `Симулятор биржи с клиент-серверной архитектурой. Приложение подключается к серверу по протоколу websocket и взаимодействует с ним через API.
    Заявки, отпрвленные через тикер, отправляются на сервер, который вернет их для отображения в таблице заявок. В таблице реализованы сортировки по столбцам.`,
    stack: "HTML, CSS, JavaScript, React, WebSocket",
    deploy: "https://alex8157.github.io/trading-terminal/",
    source: "https://github.com/Alex8157/trading-terminal",
  },
];
