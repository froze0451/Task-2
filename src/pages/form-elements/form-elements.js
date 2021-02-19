import '../../styles/style.scss'
import './form-elements.scss'
import '../assets/logo.scss'
import IMask from 'imask'

/* переменные */
let dropDownField = document.querySelector('.dropdown-field')
let drdText = document.querySelector('.guests-dropdown .dropdown-field > p')

/*let dropDowmMenuButton = document.querySelector('.drop-button')
let dropDownMenu = document.querySelector('.dropdown-menu')*/
let dropDowmMenuButton = document.querySelector('.guests-dropdown .drop-button')
let dropDownMenu = document.querySelector('.guests-dropdown .dropdown-menu')

let doubleDataDropdownButtons = document.querySelectorAll('.date-drowdown .drop-button')
let wholeCalendar = document.querySelector('.calendar')

let roomFacilitiesDropdownButton = document.querySelector('.room-facilities .drop-button')
let roomFacilitiesDropdownMenu = document.querySelector('.room-facilities .dropdown-menu')
let roomFacilitiesDropdownField = document.querySelector('.room-facilities .dropdown-field')
let roomFacilitiesText = document.querySelector('.room-facilities .dropdown-field > p')

let guests = 0
let childs = 0
let bedrooms = 0
let beds = 0
let bathrooms = 0

/*функции*/

/* для гест дропдаун*/
function guestsCount(guests) { 
  if (guests < 21) {
    if (guests === 0) {
      return ''
    } else if (guests === 1 || guests === 21) {
      return `${guests} гость`
    } else if ((guests > 1 && guests < 5) || (guests > 21 && guests < 25)) {
      return `${guests} гостя`
    } else {
      return `${guests} гостей`
    }
  } else {
    if (/1$/.test(guests)) {
      return `${guests} гость`
    } else if (/[234]$/.test(guests)) {
      return `${guests} гостя`
    } else {
      return `${guests} гостей`
    }
  }
}

function childsCount(childs) {
  if (childs < 21) {
    if (childs === 0) {
      return ''
    } else if (childs === 1 || childs === 21) {
      return `, ${childs} младенец`
    } else if ((childs > 1 && childs < 5) || (childs > 21 && childs < 25)) {
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

/* для room facilities dropdown */
function bedroomsCount(bedrooms) { 
  if (bedrooms < 21) {
    if (bedrooms === 0) {
      return ''
    } else if (bedrooms === 1 || bedrooms === 21) {
      return `${bedrooms} спальня`
    } else if ((bedrooms > 1 && bedrooms < 5) || (bedrooms > 21 && bedrooms < 25)) {
      return `${bedrooms} спальни`
    } else {
      return `${bedrooms} спален`
    }
  } else {
    if (/1$/.test(bedrooms)) {
      return `${bedrooms} спальня`
    } else if (/[234]$/.test(bedrooms)) {
      return `${bedrooms} спальни`
    } else {
      return `${bedrooms} спален`
    }
  }
}

function bedsCount(beds) { 
  if (beds < 21) {
    if (beds === 0) {
      return ''
    } else if (beds === 1 || beds === 21) {
      return `, ${beds} кровать`
    } else if ((beds > 1 && beds < 5) || (beds > 21 && beds < 25)) {
      return `, ${beds} кровати`
    } else {
      return `, ${beds} кроватей`
    }
  } else {
    if (/1$/.test(beds)) {
      return `, ${beds} кровать`
    } else if (/[234]$/.test(beds)) {
      return `, ${beds} кровати`
    } else {
      return `, ${beds} кроватей`
    }
  }
}

function bathroomsCount(bathrooms) { 
  if (bathrooms < 21) {
    if (bathrooms === 0) {
      return ''
    } else if (bathrooms === 1 || bathrooms === 21) {
      return `, ${bathrooms} ванная комната`
    } else if ((bathrooms > 1 && bathrooms < 5) || (bathrooms > 21 && bathrooms < 25)) {
      return `, ${bathrooms} ванной комнаты`
    } else {
      return `, ${bathrooms} ванных комнат`
    }
  } else {
    if (/1$/.test(bathrooms)) {
      return `, ${bathrooms} ванная комната`
    } else if (/[234]$/.test(bathrooms)) {
      return `, ${bathrooms} ванной комнаты`
    } else {
      return `, ${bathrooms} ванных комнат`
    }
  }
}

/* E V E N T S */

/*маска для поля даты*/

let dateMask = IMask(document.querySelector('.text-field-masked input'), {
  mask: Date,
  min: new Date(1990, 0, 1),
  max: new Date(2021, 0, 1),
  lazy: true,
})

/* GUESTS DROPDOWN */

/* скрипты выпадения меню и стиля border*/

dropDowmMenuButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('invisible')

  if (dropDownMenu.classList.contains('invisible')) {
    dropDownField.style.borderRadius = '4px 4px 4px 4px'
  } else {
    dropDownField.style.borderRadius = '4px 4px 0 0'
  }
})

dropDownField.addEventListener('mouseout', () => {
  if (dropDownMenu.classList.contains('invisible')) {
    dropDownField.style.border = '1px solid rgba(31, 32, 65, 0.25)'
  }
})

dropDownField.addEventListener('mouseover', () => {
  dropDownField.style.border = '1px solid rgba(31, 32, 65, 0.5)'
})



/*прибавление, убавление гостей через querySelectorAll*/
let removeGuest = document.querySelectorAll('.guest-minus')
let addGuest = document.querySelectorAll('.guest-plus')

removeGuest.forEach((removeButton) => {
  removeButton.addEventListener('click', () => {
    if (Number(removeButton.nextElementSibling.textContent) > 0) {
      removeButton.nextElementSibling.textContent =
        Number(removeButton.nextElementSibling.textContent) - 1
      guests--
      drdText.textContent = guestsCount(guests) + childsCount(childs)

      if (drdText.textContent === '') {
        drdText.textContent = 'Сколько гостей'
      } else if (guestsCount(guests) === '') {
        drdText.textContent = drdText.textContent.slice(2)
      }
    }
  })
})

addGuest.forEach((addButton) => {
  addButton.addEventListener('click', () => {
    addButton.previousElementSibling.textContent =
      Number(addButton.previousElementSibling.textContent) + 1
    guests++

    drdText.textContent = guestsCount(guests) + childsCount(childs)

    if (drdText.textContent === '') {
      drdText.textContent = 'Сколько гостей'
    } else if (guestsCount(guests) === '') {
      drdText.textContent = drdText.textContent.slice(2)
    }
  })
})

/* подсчет младенцев */
let removeChild = document.querySelector('.child-minus')
let addChild = document.querySelector('.child-plus')

removeChild.addEventListener('click', () => {
  if (Number(removeChild.nextElementSibling.textContent) > 0) {
    removeChild.nextElementSibling.textContent =
      Number(removeChild.nextElementSibling.textContent) - 1
    childs--
    drdText.textContent = guestsCount(guests) + childsCount(childs)

    if (drdText.textContent === '') {
      drdText.textContent = 'Сколько гостей'
    } else if (guestsCount(guests) === '') {
      drdText.textContent = drdText.textContent.slice(2)
    }
  }
})

addChild.addEventListener('click', () => {
  addChild.previousElementSibling.textContent =
    Number(addChild.previousElementSibling.textContent) + 1
  childs++
  drdText.textContent = guestsCount(guests) + childsCount(childs)

  if (drdText.textContent === '') {
    drdText.textContent = 'Сколько гостей'
  } else if (guestsCount(guests) === '') {
    drdText.textContent = drdText.textContent.slice(2)
  }
})

/* facilities dropdown эвенты */

/* bedrooms */
let removeBedroom = document.querySelector('.bedroom-minus')
let addBedroom = document.querySelector('.bedroom-plus')

removeBedroom.addEventListener('click', () => {
  if (Number(removeBedroom.nextElementSibling.textContent) > 0) {
    removeBedroom.nextElementSibling.textContent =
      Number(removeBedroom.nextElementSibling.textContent) - 1
    bedrooms--

    roomFacilitiesText.textContent = bedroomsCount(bedrooms) + bedsCount(beds) + bathroomsCount(bathrooms)

    if (roomFacilitiesText.textContent === '') {
      roomFacilitiesText.textContent = 'Какие удобства?'
    } else if (bedroomsCount(bedrooms)  === '') {
      roomFacilitiesText.textContent = roomFacilitiesText.textContent.slice(2)
    }
  }
})

addBedroom.addEventListener('click', () => {
  addBedroom.previousElementSibling.textContent =
    Number(addBedroom.previousElementSibling.textContent) + 1
  bedrooms++
  
  roomFacilitiesText.textContent = bedroomsCount(bedrooms) + bedsCount(beds) + bathroomsCount(bathrooms)

  if (roomFacilitiesText.textContent === '') {
    roomFacilitiesText.textContent = 'Какие удобства?'
  } else if (bedroomsCount(bedrooms) === '') {
    roomFacilitiesText.textContent = roomFacilitiesText.textContent.slice(2)
  }
})

/* beds */
let removeBed = document.querySelector('.bed-minus')
let addBed = document.querySelector('.bed-plus')

removeBed.addEventListener('click', () => {
  if (Number(removeBed.nextElementSibling.textContent) > 0) {
    removeBed.nextElementSibling.textContent =
      Number(removeBed.nextElementSibling.textContent) - 1
    beds--

    roomFacilitiesText.textContent = bedroomsCount(bedrooms) + bedsCount(beds) + bathroomsCount(bathrooms)

    if (roomFacilitiesText.textContent === '') {
      roomFacilitiesText.textContent = 'Какие удобства?'
    } else if (bedroomsCount(bedrooms)  === '') {
      roomFacilitiesText.textContent = roomFacilitiesText.textContent.slice(2)
    }
  }
})

addBed.addEventListener('click', () => {
  addBed.previousElementSibling.textContent =
    Number(addBed.previousElementSibling.textContent) + 1
  beds++
  
  roomFacilitiesText.textContent = bedroomsCount(bedrooms) + bedsCount(beds) + bathroomsCount(bathrooms)

  if (roomFacilitiesText.textContent === '') {
    roomFacilitiesText.textContent = 'Какие удобства?'
  } else if (bedroomsCount(bedrooms) === '') {
    roomFacilitiesText.textContent = roomFacilitiesText.textContent.slice(2)
  }
})

/* bathrooms */
let removeBathroom = document.querySelector('.bathroom-minus')
let addBathroom = document.querySelector('.bathroom-plus')

removeBathroom.addEventListener('click', () => {
  if (Number(removeBathroom.nextElementSibling.textContent) > 0) {
    removeBathroom.nextElementSibling.textContent =
      Number(removeBathroom.nextElementSibling.textContent) - 1
    bathrooms--

    roomFacilitiesText.textContent = bedroomsCount(bedrooms) + bedsCount(beds) + bathroomsCount(bathrooms)

    if (roomFacilitiesText.textContent === '') {
      roomFacilitiesText.textContent = 'Какие удобства?'
    } else if (bedroomsCount(bedrooms)  === '') {
      roomFacilitiesText.textContent = roomFacilitiesText.textContent.slice(2)
    }
  }
})

addBathroom.addEventListener('click', () => {
  addBathroom.previousElementSibling.textContent =
    Number(addBathroom.previousElementSibling.textContent) + 1
  bathrooms++
  
  roomFacilitiesText.textContent = bedroomsCount(bedrooms) + bedsCount(beds) + bathroomsCount(bathrooms)

  if (roomFacilitiesText.textContent === '') {
    roomFacilitiesText.textContent = 'Какие удобства?'
  } else if (bedroomsCount(bedrooms) === '') {
    roomFacilitiesText.textContent = roomFacilitiesText.textContent.slice(2)
  }
})


/* calendar */

let previousMonthButton = document.querySelector('.previous-month-button')
let nextMonthButton = document.querySelector('.next-month-button')

/*вариант календаря для 1 месяца*/

let calendar = document.getElementById('calendar')

function createCalendar() {
  /*(elem, year, month)*/

  let coco = 0 /*let d = new Date(year, month); */ // месяцы в JS идут от 0 до 11, а не от 1 до 12

  /*let mon = month - 1; */ let d = new Date()
  let today = d.getDate()
  d.setDate(1)
  /*if (next) {
    d.setMonth(d.getMonth() + 1);
  }*/

  let mon = d.getMonth()

  let pp = new Date()
  /*pp.setDate(d.getDate() - getDay(d));*/
  pp.setDate(d.getDate() - getDay(d))
  console.log(pp)

  let table = '<tr>'

  /*for (let i = 0; i < getDay(d); i++) {
    table += `<td>` + pp.getDate() + `</td>`;
    pp.setDate(pp.getDate() - 1);
  }*/

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += `<td>` + pp.getDate() + `</td>`
    pp.setDate(pp.getDate() + 1)
    coco++
    console.log(coco)
    console.log(getDay(d))
  }

  // <td> ячейки календаря с датами
  while (d.getMonth() == mon) {
    if (d.getDate() === today) {
      table +=
        '<td style="border-radius: 50%; background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%); color: #FFFFFF">' +
        d.getDate() +
        '</td>'
    } else {
      table += '<td>' + d.getDate() + '</td>'
    }

    if (getDay(d) % 7 == 6) {
      // вс, последний день - перевод строки
      table += '</tr><tr>'
    }

    d.setDate(d.getDate() + 1)
    coco++
  }

  if (coco === 28) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td>' + d.getDate() + '</td>'
      d.setDate(d.getDate() + 1)
      coco++
    }
  } else {
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td>' + d.getDate() + '</td>'
        d.setDate(d.getDate() + 1)
        coco++
      }
    }
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  /*if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td>' + d.getDate() + '</td>';
      d.setDate(d.getDate() + 1);
      coco++;
    }
  }*/

  console.log(coco)

  //добиваем начало следующего месяца
  /*if (coco === 28) {
    table += '<tr>';
  }

  while (coco < 35) {
    table += '<td>' + d.getDate() + '</td>';
    d.setDate(d.getDate() + 1);
    coco++;
  }*/

  console.log(coco)

  // закрыть таблицу
  table += '</tr>'

  /*elem.innerHTML = table;*/
  calendar.innerHTML = table
}

function getDay(date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay()
  if (day == 0) day = 7 // сделать воскресенье (0) последним днем
  return day - 1
}

/*createCalendar(calendar, 2021, 1); */
createCalendar()

/*
previousMonthButton.addEventListener('click', () => {
  createCalendar(calendar, 2021, 1); 
})

nextMonthButton.addEventListener('click', () => {
  createCalendar(); 
})*/

let checkIn
let checkOut
let checkInDate
let cells = document.querySelectorAll('.calendar tbody td')

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    cell.style.background = 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)'
    cell.style.borderRadius = '50%'

    checkIn = [].indexOf.call(cells, cell)
    checkInDate = checkIn + 1

    console.log(checkIn)
    console.log(checkInDate)
  })
})

cells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    if (checkIn) {
      console.log('nice')
      let index = [].indexOf.call(cells, cell)
      if (checkIn < index) {
        for (; index > checkIn; index--) {
          cells[index].style.background =
            'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)'
          cells[index].style.opacity = '0.25'
        }
      }
    }
  })

  cell.addEventListener('mouseout', () => {
    if (checkIn) {
      console.log('nice')
      let index = [].indexOf.call(cells, cell)
      if (checkIn < index) {
        for (; index > checkIn; index--) {
          cells[index].style.background = 'white'
        }
      }
    }
  })
})

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (checkIn) {
      let afterDate = [].indexOf.call(cells, cell)
      if (afterDate < checkIn) {
        checkIn = afterDate
      } else {
        checkOut = afterDate
        cell.style.background =
          'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)'
        cell.style.borderRadius = '50%'
        cell.style.opacity = '1'
      }
    }
  })
})

doubleDataDropdownButtons.forEach((button) => {
  button.addEventListener('click', () => {
    wholeCalendar.classList.toggle('invisible')
  })
})

/* room facilities dropdown events */
roomFacilitiesDropdownButton.addEventListener('click', () => {
  roomFacilitiesDropdownMenu.classList.toggle('invisible')
})

roomFacilitiesDropdownField.addEventListener('mouseout', () => {
  if (roomFacilitiesDropdownMenu.classList.contains('invisible')) {
    roomFacilitiesDropdownField.style.border = '1px solid rgba(31, 32, 65, 0.25)'
  }
})

roomFacilitiesDropdownField.addEventListener('mouseover', () => {
  roomFacilitiesDropdownField.style.border = '1px solid rgba(31, 32, 65, 0.5)'
})
