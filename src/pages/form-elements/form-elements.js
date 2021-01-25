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





    

