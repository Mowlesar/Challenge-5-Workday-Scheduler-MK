$(document).ready(() => {
  var currentHour = dayjs().format('H');

  $('.time-block').each(function() {
    var hour = parseInt($(this).attr('id').split('-')[1]);

    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour == currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

    var timeBlockId = $(this).attr('id');
    var savedValue = localStorage.getItem(timeBlockId);

    $(this).find('.description').val(savedValue);
  });

  $('.saveBtn').on('click', function() {
    var userInput = $(this).siblings('.description').val();
    var timeBlockId = $(this).closest('.time-block').attr('id');
    localStorage.setItem(timeBlockId, userInput);
  });
  
  $(`#currentDay`).text(`Today is ` + dayjs().format(`dddd-MMMM-DD-YYYY`));
});