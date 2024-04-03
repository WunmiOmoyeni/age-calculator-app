let imageClicked = document.getElementById("icon-arrow");


imageClicked.addEventListener("click", function() {
    let currentDate = new Date();

    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = document.getElementById("month").value - 1;
    let dayOfBirth = document.getElementById("day").value;

    const dateOfBirth = new Date(yearOfBirth, monthOfBirth, dayOfBirth);
    console.log(dateOfBirth);

    let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
    let months = currentDate.getMonth() - dateOfBirth.getMonth();
    let days = currentDate.getDate() - dateOfBirth.getDate();

    if (months < 0 || (months === 0 && currentDate.getDate() < dateOfBirth.getDate())) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastDayOfMonth;
        months--;
    }

    let yearOfAge = document.getElementById("age-year");
    let monthOfAge = document.getElementById("age-month");
    let dayOfAge = document.getElementById("age-day");

    
    yearOfAge.innerHTML= years;
    monthOfAge.innerHTML = months;
    dayOfAge.innerHTML = days;

    console.log(years);
    console.log(months);
    console.log(days); 

   emptyInput();
   invalidInput();
});


function emptyInput() {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = document.getElementById("month").value - 1;
    let dayOfBirth = document.getElementById("day").value;

    let yearOfAge = document.getElementById("age-year");
    let monthOfAge = document.getElementById("age-month");
    let dayOfAge = document.getElementById("age-day");

    if (!yearOfBirth || !monthOfBirth || !dayOfBirth ) {
        var labels = document.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = "hsl(0, 100%, 67%)";
        }

        var errorEmpty = document.getElementsByClassName("error-empty-message");
        for (var i = 0; i < errorEmpty.length; i++){
            errorEmpty[i].style.display ="block";
        }

        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++){
            inputs[i].style.borderColor = "hsl(0, 100%, 67%)";
        }

        yearOfAge.innerHTML = "--";
        monthOfAge.innerHTML = "--";
        dayOfAge.innerHTML = "--";
    }

    else{
        var errorEmpty = document.getElementsByClassName("error-empty-message");
        for (var i = 0; i < errorEmpty.length; i++){
            errorEmpty[i].style.display ="none";
       }

       var labels = document.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++) {
            labels[i].style.color = "hsl(0, 1%, 44%)";
        }

        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++){
            inputs[i].style.borderColor = "hsl(0, 0%, 86%)";
        }
    }
}

function invalidInput() {
    let yearOfBirth = document.getElementById("year").value;
    let monthOfBirth = document.getElementById("month").value - 1;
    let dayOfBirth = document.getElementById("day").value;

    let yearOfAge = document.getElementById("age-year");
    let monthOfAge = document.getElementById("age-month");
    let dayOfAge = document.getElementById("age-day");

    let currentDate = new Date();
    if (yearOfBirth > currentDate.getFullYear() || monthOfBirth > 11 || dayOfBirth > 31) {

        var errorInvalidMonth = document.getElementsByClassName("error-invalid-message");
        for (var i = 0; i < errorInvalidMonth.length; i++) {
            errorInvalidMonth[i].style.display = "block";
        }
        inputsLabel();
        yearOfAge.innerHTML = "--";
        monthOfAge.innerHTML = "--";
        dayOfAge.innerHTML = "--";
    }

    else {
        var errorInvalidMonth = document.getElementsByClassName("error-invalid-message");
        for (var i = 0; i < errorInvalidMonth.length; i++) {
            errorInvalidMonth[i].style.display = "none";
        }
    }
}

function inputsLabel() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++){
        inputs[i].style.borderColor = "hsl(0, 100%, 67%)";
    }

    var labels = document.getElementsByTagName("label");
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.color = "hsl(0, 100%, 67%)";
    }
}

