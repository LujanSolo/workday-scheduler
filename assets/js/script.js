//*establishing globally scoped variables:
let saveBtn = $('.save-btn');


//*Display the current day to the top of the page
$('#currentDay').text("Today is " + moment().format("dddd, MMMM Do"));


//* Begin with a function to get values from local storage (if any).
function getPriorNotes() {
    $('.hour').each(function() {  //*goes through each .hour and check to see if there is existing data in local storage
        let notesHour = $(this).text();
        let previousNotes = localStorage.getItem(notesHour);
        if (notesHour !== null) {
            $(this).siblings('.time-block').val(previousNotes);
        }
    })
};
getPriorNotes();


//*When the user clicks save at the end of any hour row, the entry from the input field goes to local storage...
saveBtn.on('click', function() {
    let hour = $(this).siblings('.hour').text();
    let userNote = $(this).siblings('.time-block').val();
    localStorage.setItem(hour, userNote);
})


//*A function to color code the hour rows
function timeColors() {
    let currentTime = moment().hour(); //*to pull the general hour, instead of exact time from moment();

    $('.time-block').each(function() {
        let taskTime = parseInt($(this).attr("id")); //*taskTime now represents each class="time-block" by their unique id's

        if (currentTime > taskTime) {
            $(this).addClass("past");
        } 
        if (currentTime === taskTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    })
}
timeColors();