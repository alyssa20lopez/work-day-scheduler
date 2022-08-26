var currentDay = $('#currentDay').html("" + moment().format("dddd, MMMM Do"));

function colorHours() {
    var currentTime = moment().format("HH");

    for (var i = 9; i <= 17; i++) {
        if (i < currentTime)$(`#hour${i}`).addClass("past"); 
        if (i == currentTime)$(`#hour${i}`).addClass("present");
        if (i > currentTime)$(`#hour${i}`).addClass("future");
    }
};

$(document).ready(function () {
    $(".saveBtn").on("click",function () {
        var text = $(this).siblings(".text").val();

        localStorage.setItem('description',text);
    })
});