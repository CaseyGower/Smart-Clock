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
    if (hour === 0) {
        hour = hour + 12;
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

            var condition = data.currently.icon;
            console.log(condition);


            if (condition === "clear-day") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/ clear-day.png";
            } else if (condition === "clear-night") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/clear-night.png";
            } else if (condition === "rain") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/rain.png";
            } else if (condition === "snow") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/snow.png";
            } else if (condition === "sleet") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/sleet.png";
            } else if (condition === "wind") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/wind.png";
            } else if (condition === "fog") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/fog.png";
            } else if (condition === "cloudy") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/cloudy.png";
            } else if (condition === "partly-cloudy-day") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/partly-cloudy-day.png";
            } else if (condition === "partly-cloudy-night") {
                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/partly-cloudy-night.png";
            } else {

                document.getElementById("weatherImg").src = "images/VClouds Weather Icons/na.png";

            }


        },

        type: "GET"
    });



}, 600000)

function getLionAlerts() {
    //get the rss feed

    var rssURL = "http://www.getrave.com/rss/FHU/channel1";

    $.ajax({
        type: "GET",
        url: rssURL,
        dataType: "xml",
        error: function () {
            console.log("ERROR: Unable to load RSS feed. Check the URL and your connection status.");
        },
        success: function (xml) {

            var $items = $(xml).find("item");

            $items.each(function () {
                // extract the alert title
                var lionAlertTitle = $(this).find("title").text();
                console.log(lionAlertTitle);
                $("#lionAlertHead").text(lionAlertTitle);
                $("#lionAlertHead-V").text(lionAlertTitle);

                // extract the alert description 
                var lionAlertDescription = $(this).find("description").text();
                console.log(lionAlertDescription);
                $("#alertBox").text(lionAlertDescription);
                $("#alertBox-V").text(lionAlertDescription)

                var lionAlertDateString = $(this).find("pubDate").text();

                var lionAlertDate = new Date(lionAlertDateString);
                console.log(lionAlertDate);
                console.log(lionAlertDateString);
                console.log(lionAlertDate.getMinutes());

                var currentTime = new Date();

                // if (lionAlertDate.getMinutes() >= currentTime.getMinutes() - 15) {
                //  var newUrl = "http://127.0.0.1:56895/lionAlert.html";
                // window.location.replace(newUrl);
                //  } else {}



            });

        }
    });

}

setInterval(getLionAlerts(), 5000)


$(document).ready(main);
