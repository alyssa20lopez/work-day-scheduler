var currentDay = $('#currentDay').html("" + moment().format("dddd, MMMM Do"));


    var currentTime = +moment().format("HH");

    console.log(typeof currentTime);

    for (var i = 9; i <= 17; i++) {
        console.log($(`#hour${i}`));
        if (i < currentTime)$(`#hour${i}`).addClass("past"); 
        if (i == currentTime)$(`#hour${i}`).addClass("present");
        if (i > currentTime)$(`#hour${i}`).addClass("future");

        window.localStorage.setItem('description','#hour');
        $('#hour').html(window.localStorage.getItem('description'));
    }

$(document).ready(function () {
    $(".saveBtn").on("click",function () {
        var text = $(this).prev().val();
        var id = $(this).prev().attr('id');
        

        localStorage.setItem(id,text);
    })
});