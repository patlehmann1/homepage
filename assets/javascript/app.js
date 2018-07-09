
function jumboGreeting() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
        document.getElementById("jumbotron-header").innerHTML = "Good Morning!";
    } else if (curHr < 18) {
        document.getElementById("jumbotron-header").innerHTML = "Good Afternoon!";
    } else {
        document.getElementById("jumbotron-header").innerHTML = "Good Evening!";
    }

}

jumboGreeting();