var currentDay = $('#currentDay').html("" + moment().format("dddd, MMMM Do"));

function colorHours() {
    var currentTime = moment().format("HH");

    for (var i = 9; i <= 17; i++) {
        if (i < currentTime) $(`#data${i}`).addclass("past");
        if (i === currentTime) $(`#data${i}`).addclass("present");
        if (i > currentTime) $(`#data${i}`).addclass("future");
    }

    colorHours();
};

