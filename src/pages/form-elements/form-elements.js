import '../../styles/style.scss'
import './form-elements.scss'
import '../assets/logo.scss'
import IMask from 'imask';

/* переменные */ 
let dropDownField = document.querySelector('.dropdown-field')
let drdText = document.querySelector('.dropdown-field > p')
let dropDowmMenuButton = document.querySelector('.drop-button')
let dropDownMenu = document.querySelector('.dropdown-menu')

let guests = 0;
let childs = 0;

/*функции*/ 
function guestsCount(guests) {
  if (guests < 21) {
    if (guests === 0) {
      return ''
    } else if (guests === 1 || guests === 21) {
      return `${guests} гость`
    } else if (guests > 1 && guests < 5 || guests > 21 && guests < 25) {
      return `${guests} гостя`
    } else {
      return `${guests} гостей`
    }
  } else {
    if (/1$/.test(guests)) {
      return `${guests} гость`
    } else if (/[234]$/.test(guests)) {
      return`${guests} гостя`
    } else {
      return `${guests} гостей`
    }
  }
}

function childsCount(childs) {
  if (childs < 21) {
    if (childs === 0) {
      return ""
    } else if (childs === 1 || childs === 21) {
      return `, ${childs} младенец`
    } else if (childs > 1 && childs < 5 || childs > 21 && childs < 25) {
      return `, ${childs} младенца`
    } else {
      return `, ${childs} младенцев`
    }
  } else {
    if (/1$/.test(childs)) {
      return `, ${childs} младенец`
    } else if (/[234]$/.test(childs)) {
      return `, ${childs} младенца`
    } else {
      return `, ${childs} младенцев`
    }
  }
}


/*эвенты*/ 

dropDowmMenuButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('invisible')

  if (dropDownMenu.classList.contains('invisible')) {
    dropDownField.style.borderRadius = '4px 4px 4px 4px';
  } else {
    dropDownField.style.borderRadius = '4px 4px 0 0';
  }
})

dropDownField.addEventListener('mouseout', () => {
  if (dropDownMenu.classList.contains('invisible')) {
    dropDownField.style.border = '1px solid rgba(31, 32, 65, 0.25)';
  } 
})

dropDownField.addEventListener('mouseover', () => {
  dropDownField.style.border = '1px solid rgba(31, 32, 65, 0.5)';
})


/*маска для поля даты*/

let dateMask = IMask(
  document.querySelector('.text-field-masked input'),
  {
    mask: Date,
    min: new Date(1990, 0, 1),
    max: new Date(2021, 0, 1),
    lazy: true
  });

/*дропдаун меню кнопки добавить/убрать*/ 

/*let removeButton = document.querySelector('.minus')
let addButton = document.querySelector('.plus')

removeButton.addEventListener('click', () => {
  if (Number(addButton.previousElementSibling.textContent) > 0) {
    addButton.previousElementSibling.textContent = Number(addButton.previousElementSibling.textContent) - 1
  }
})

addButton.addEventListener('click', () => {
  addButton.previousElementSibling.textContent = Number(addButton.previousElementSibling.textContent) + 1
})*/


/* подсчет младенцев */
let removeChild = document.querySelector('.child-minus')
let addChild = document.querySelector('.child-plus')

removeChild.addEventListener('click', () => {
  if (Number(removeChild.nextElementSibling.textContent) > 0) {
    removeChild.nextElementSibling.textContent = Number(removeChild.nextElementSibling.textContent) - 1
    childs--;
    drdText.textContent = guestsCount(guests) + childsCount(childs)

    if (drdText.textContent === "") {
      drdText.textContent = 'Сколько гостей'
    } else if (guestsCount(guests) === "") {
      drdText.textContent = drdText.textContent.slice(2)
    }
  }
})

addChild.addEventListener('click', () => {
  addChild.previousElementSibling.textContent = Number(addChild.previousElementSibling.textContent) + 1
  childs++;
  drdText.textContent = guestsCount(guests) + childsCount(childs)

  if (drdText.textContent === "") {
    drdText.textContent = 'Сколько гостей'
  } else if (guestsCount(guests) === "") {
    drdText.textContent = drdText.textContent.slice(2)
  }
})

/*прибавление, убавление гостей через querySelectorAll*/ 
let removeGuest = document.querySelectorAll('.guest-minus')
let addGuest = document.querySelectorAll('.guest-plus')

removeGuest.forEach((removeButton) => {
  removeButton.addEventListener('click', () => {
    if (Number(removeButton.nextElementSibling.textContent) > 0) {
      removeButton.nextElementSibling.textContent = Number(removeButton.nextElementSibling.textContent) - 1
      guests--;
      drdText.textContent = guestsCount(guests) + childsCount(childs)

      if (drdText.textContent === "") {
        drdText.textContent = 'Сколько гостей'
      } else if (guestsCount(guests) === "") {
        drdText.textContent = drdText.textContent.slice(2)
      }
    }
  })
})

addGuest.forEach((addButton) => {
  addButton.addEventListener('click', () => {
    addButton.previousElementSibling.textContent = Number(addButton.previousElementSibling.textContent) + 1
    guests++;

    drdText.textContent = guestsCount(guests) + childsCount(childs)
    
    if (drdText.textContent === "") {
      drdText.textContent = 'Сколько гостей'
    } else if (guestsCount(guests) === "") {
      drdText.textContent = drdText.textContent.slice(2)
    }
  })
})



/*тесты объекта Date */ 

/*window.addEventListener('click', () => {
  
  let d = new Date(2021, 0);
  console.log(d.getDate())
  console.log(getDay(d))


  d.setDate(d.getDate() + 1)
  console.log(d.getDate())
  console.log(getDay(d))
  

  
  for (let i = 0; i < getDay(d); i++) {
    if (getDay(d) % 7 == 6)
    console.log('yeah')
  }

 function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

  
  
})*/




/*
window.addEventListener('click', () => {
  
  let d = new Date(2021, 0);

  function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

  for (let i = 0; i < getDay(d); i++) {
    console.log(d)
  }
  
})
*/


/*влияние убавления/прибавления гостей через кнопок на текстовое поле dropdown-field*/ 

/*
dropDownField.addEventListener('click', () => {
  guests++;
  if (guests < 21) {
    if (guests === 1 || guests === 21) {
      drdText.textContent = `${guests} гость`
    } else if (guests > 1 && guests < 5 || guests > 21 && guests < 25) {
      drdText.textContent = `${guests} гостя`
    } else {
      drdText.textContent = `${guests} гостей`
    }
  } else {
    if (/1$/.test(guests)) {
      drdText.textContent = `${guests} гость`
    } else if (/[234]$/.test(guests)) {
      drdText.textContent = `${guests} гостя`
    } else {
      drdText.textContent = `${guests} гостей`
    }
  }
})
*/





/*вариант календаря для 1 месяца*/ 
/*
let calendar = document.getElementById('calendar')

function createCalendar(elem, year, month) {

  let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  let d = new Date(year, mon);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // <td> ячейки календаря с датами
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  // закрыть таблицу
  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}

createCalendar(calendar, 2021, 1); */





    

