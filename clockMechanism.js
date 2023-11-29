// Function to display and continuously update the current time.
function clock(){
    // Arrays to store month names and day names.
    let monthNames = [ "January", "February", "March", "April","May", "June", "July","August", "September", "Octuber", "November", "December" ];
    let daysNames = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday","Friday", "Saturday"];

    // Creates a new Date object representing the current date and time.
    let today = new Date();

    // Sets the content of the 'Date' element to display the current date.
    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + "" + today.getDate() + '' + monthName[today.getMonth()] + '' + today.getFullYear());

    // Retrieves the current hours, minutes, and seconds.
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // Checks whether it's AM or PM based on the hour value.
    let day = h<11 ? 'AM' : 'PM';

    // Adds leading zeros to hours, minutes, and seconds if less than 10.
    h = h<10? '0' +h: h;
    m = m<10? '0' +m: m;
    s = s<10? '0' +s: s;

    // Updates the respective elements with the current time values.
    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    
}

// Sets an interval to call the clock function every 400 milliseconds.
let inter = setInterval (clock,400);