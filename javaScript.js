var main = function () {
    /*
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        */

    //Clock



}
setInterval(function () {

    var currectDateTime = new Date();
    var hour = currectDateTime.getHours();
    var minutes = currectDateTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    } else {}
    if (hour > 12) {
        hour = hour - 12;
    } else {}

    var day = currectDateTime.getDay();
    var daysofweek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    var today = daysofweek[day];
    var date = currectDateTime.getDate();
    var month = currectDateTime.getMonth();
    var year = currectDateTime.getFullYear();
    switch (currectDateTime.getMonth()) {
        case 0:
            month = "Jan.";
            break;
        case 1:
            month = "Feb.";
            break;
        case 2:
            month = "Mar.";
            break;
        case 3:
            month = "Apr.";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "Aug.";
            break;
        case 8:
            month = "Sep.";
            break;
        case 9:
            month = "Oct.";
            break;
        case 10:
            month = "Nov.";
            break;
        case 11:
            month = "Dec.";
            break;
    }

    $("#timeElement").text(hour + ":" + minutes);
    $("#dateElement").text(today + " " + month + " " + date);
    console.log(today + " " + month + " " + date)

}, 500);

setInterval(function () {
    $("#currentTemp").text(function () {
        $.getJSON("https://api.darksky.net/forecast/b2151007fa719e0e947dc0675e178dae/35.4394,-88.6342", function (data) {
            var temp = data.currently.temperature;
            $("#currentTemp").text(temp + "°F")
        });
    });
    $.ajax({
        url: 'https://api.darksky.net/forecast/b581b5c0fc48b3c8bafb217daf3096c1/35.4420477,-88.637395',
        data: {
            format: 'json'
        },
        error: function (error) {
            console.log(error);
        },
        dataType: 'jsonp',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        success: function (data) {

            var temp = data.currently.temperature;
            console.log(temp);
            $("#currentTemp").text(temp + " °");

            var condition = data.currently.summary;
            console.log(condition);
            $("#currentCondition").text(condition);

            if (condition.equals(clear)) {
                $("weatherImg").
            }
        },

        type: 'GET'
    });



}, 600000)

$(document).ready(main);
