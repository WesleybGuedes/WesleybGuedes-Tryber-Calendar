
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createCalendarDays = () => {
  const daysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const day = decemberDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = day;
    dayListItem.className = 'day';

    if (day === 24 || day === 25 || day === 31) {
      dayListItem.classList.add('holiday');
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.classList.add('friday');
    }

    daysList.appendChild(dayListItem);
  };
}

createCalendarDays();

const changeHolidayColor = () => {
  const buttonsContainer = document.querySelector('#btn-holiday');
  buttonsContainer.addEventListener('click', () => {
    const holidays = document.querySelectorAll('.holiday');
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'purple') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'purple';
      }
    }
  });
}

changeHolidayColor();

const changeFridayColor = () => {
  const buttonsContainer = document.querySelector('#btn-friday');
  buttonsContainer.addEventListener('click', () => {
    const fridays = document.querySelectorAll('.friday');
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].style.backgroundColor === 'brown') {
        fridays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        fridays[index].style.backgroundColor = 'brown';
      }
    }
  });
}

changeFridayColor();

