import '../../styles/style.scss'
import './form-elements.scss'
import '../assets/logo.scss'

let dropDownField = document.querySelector('.dropdown-field')
let dropDowmMenuButton = document.querySelector('.drop-button')
let dropDownMenu = document.querySelector('.dropdown-menu')

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

