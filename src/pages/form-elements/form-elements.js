import '../../styles/style.scss'
import './form-elements.scss'
import '../assets/logo.scss'
import IMask from 'imask';

/* для dropdown с гостями */ 
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


/*для поля с маской
let maskedField = document.querySelector('.text-field-masked input')*/

let dateMask = IMask(
  document.querySelector('.text-field-masked input'),
  {
    mask: Date,
    min: new Date(1990, 0, 1),
    max: new Date(2021, 0, 1),
    lazy: true
  });









/*maskedField.addEventListener('input', () => {
  if (maskedField.value == 911) {
    console.log('OMG')
  } else {
    console.log(maskedField.value)
  }
})*/

/*maskedField.addEventListener('input', () => {
  if (maskedField.value.match(/^(?:(?:31(\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/) !== null) {
    console.log('yes')
  } else {
    console.log('nah')
  }
})*/

    

