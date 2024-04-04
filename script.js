const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  weekDays.forEach(day => {
    const dayListItem = document.createElement('li');
    dayListItem.textContent = day;
    weekDaysList.appendChild(dayListItem);
  });
}

const createCalendarDays = () => {
  const daysList = document.querySelector('#days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  decemberDaysList.forEach(day => {
    const dayListItem = document.createElement('li');
    dayListItem.textContent = day;
    dayListItem.className = 'day';

    if ([24, 25, 31].includes(day)) {
      dayListItem.classList.add('holiday');
    }

    if ([4, 11, 18, 25].includes(day)) {
      dayListItem.classList.add('friday');
    }

    daysList.appendChild(dayListItem);
  });
}


const changeHolidayColor = () => {
  const buttonsContainer = document.querySelector('#btn-holiday');
  const holidays = document.querySelectorAll('.holiday');

  buttonsContainer.addEventListener('click', () => {
    holidays.forEach(holiday => {
      holiday.style.backgroundColor = holiday.style.backgroundColor === 'purple' ? 'rgb(238,238,238)' : 'purple';
    });
  });
}

const showHFridays = (fridaysArray) => {
  const fridayButton = document.querySelector("#btn-friday");
  const fridays = document.getElementsByClassName("friday");
  const fridayText = "It is Friday-day!!! o/";

  fridayButton.addEventListener("click", () => {
    Array.from(fridays).forEach((friday, index) => {
      friday.innerHTML = friday.innerHTML !== fridayText ? fridayText : fridaysArray[index];
    });
  });
};

const zoomIn = (event) => {
  event.target.style.fontSize = '30px';
}

const zoomOut = (event) => {
  event.target.style.fontSize = '20px';
}

const handleTaskSelection = (event) => {
  const selectedTask = document.querySelector('.task.selected');
  if (selectedTask && selectedTask !== event.target) {
    selectedTask.classList.remove('selected');
  }

  if (!selectedTask || selectedTask !== event.target) {
    event.target.classList.add('selected');
  } else {
    event.target.classList.remove('selected');
  }
}

const handleDayClick = (event) => {
  const selectedTask = document.querySelector('.task.selected');
  if (selectedTask && event.target.classList.contains('day')) {
    event.target.style.color = event.target.style.color === selectedTask.style.backgroundColor ? 'rgb(119,119,119)' : selectedTask.style.backgroundColor;
  }
}

const addButtonClickListener = () => {
  const buttonAdd = document.querySelector('#btn-add');
  const inputTask = document.querySelector('#task-input');
  const taskList = document.querySelector('#task-list');

  const addTask = () => {
    if (inputTask.value === '') {
      alert('Campo de tarefa vazio');
      return;
    }

    const task = document.createElement('li');
    task.textContent = inputTask.value;
    taskList.appendChild(task);
    inputTask.value = '';
  }

  buttonAdd.addEventListener('click', addTask);
  inputTask.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
}

const init = () => {
  createDaysOfTheWeek();
  createCalendarDays();
  changeHolidayColor();
  showHFridays([4, 11, 18, 25]);
  const daysList = document.querySelector('#days');
  daysList.addEventListener('mouseover', zoomIn);
  daysList.addEventListener('mouseout', zoomOut);
  const taskDivs = document.querySelectorAll('.task');
  taskDivs.forEach(task => task.addEventListener('click', handleTaskSelection));
  daysList.addEventListener('click', handleDayClick);
  addButtonClickListener();
}

init();






