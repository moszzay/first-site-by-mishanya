let btn = document.getElementById('showMore');
let text = document.getElementById('moreText');

if (btn) {
  btn.addEventListener('click', function () {
    if (text.classList.contains('d-none')) {
      text.classList.remove('d-none');
      btn.textContent = 'Скрыть';
    } else {
      text.classList.add('d-none');
      btn.textContent = 'Подробнее';
    }
  });
}

// счетчик приветствий
let helloBtn = document.getElementById('helloBtn');
let helloText = document.getElementById('helloText');
let count = 0;

if (helloBtn) {
  helloBtn.addEventListener('click', function () {
    count++;
    if (count == 1) {
      helloText.textContent = 'Привет! Спасибо, что зашёл на мой сайт :)';
    } else {
      helloText.textContent = 'Ты поздоровался уже ' + count + ' раз(а)';
    }
  });
}

let my_list = [
  { name: 'HTML', info: 'разметка страниц, теги, ссылки и формы' },
  { name: 'CSS', info: 'цвета, шрифты, сетка и адаптив под телефон' },
  { name: 'Bootstrap', info: 'готовые классы и компоненты, например collapse' },
  { name: 'JavaScript', info: 'кнопки, проверка формы и вывод данных' },
  { name: 'GitHub', info: 'репозиторий и публикация через GitHub Pages' }
];

let box = document.getElementById('projects');

if (box) {
  for (let i = 0; i < my_list.length; i++) {
    let tile = document.createElement('div');
    tile.className = 'tile';

    let num = document.createElement('span');
    num.className = 'tile-num';
    num.textContent = '0' + (i + 1);

    let title = document.createElement('h3');
    title.textContent = my_list[i].name;

    let p = document.createElement('p');
    p.textContent = my_list[i].info;

    tile.appendChild(num);
    tile.appendChild(title);
    tile.appendChild(p);
    box.appendChild(tile);
  }
}

let form = document.getElementById('contactForm');
let msg = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let x = document.getElementById('name').value.trim();
    let y = document.getElementById('email').value.trim();
    let z = document.getElementById('comment').value.trim();

    // проверяем что все заполнено
    let flag = true;
    if (x == '' || y == '' || z == '') {
      flag = false;
    }

    if (flag == false) {
      msg.textContent = 'Заполните все поля';
      msg.className = 'error';
    } else if (y.indexOf('@') == -1) {
      msg.textContent = 'В email нет символа @';
      msg.className = 'error';
    } else {
      msg.textContent = x + ', спасибо! Сообщение отправлено';
      msg.className = 'ok';
      form.reset();
    }
  });
}
