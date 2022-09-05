//*establishing globally scoped variables:
let saveBtn = $('.save-btn');
const now = moment(); //*establishing current time to use for color-coded timeblocks

//* Begin with a document.ready function to load the current day to the top of the page with moment.js...
$(document).ready(function displayDay() {
    let currentDay = $('#currentDay');
    let todayIs = moment().format("[Today is] dddd");
    currentDay.text(todayIs);
});





//*When the user clicks save at the end of any hour row, the entry from the input field goes to local storage...
saveBtn.on('click', function() {
    let hour = $(this).siblings('.hour').text();
    let userNote = $(this).siblings('.time-block').val();
    localStorage.setItem(hour, userNote);
})