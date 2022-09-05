$(document).ready(function displayDay() {
    let currentDay = $('#currentDay');
    let todayIs = moment().format("[Today is] dddd");
    currentDay.text(todayIs);
})