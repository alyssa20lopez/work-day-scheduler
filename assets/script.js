var currentDay = $('#currentDay').html("" + moment().format("dddd, MMMM Do"));

function store(){
    var input = document.getElementById('description').value;

    const container = {
        input: input,
    }

    window.localStorage.setItem(description,JSON.stringify(container));
}