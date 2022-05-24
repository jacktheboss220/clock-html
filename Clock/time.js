setInterval(GetTime, 1000);
function GetTime() {
    let a = new Date();
    // let date = a.toLocaleDateString();
    let last = '';
    if (a.getHours() >= 0 && a.getHours() <= 12) {
        last = "AM";
    } else {
        last = "PM"
    }
    let DayNmae = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let hours = Number(a.getHours());
    if (hours > 12) {
        hours = hours - 12;
    }
    hours = hours.toString();
    if (hours.length == 1) {
        hours = '0' + hours;
    }
    let min = a.getMinutes().toString();
    if (min.length == 1) {
        min = '0' + min;
    }
    let sec = a.getSeconds().toString();
    if (sec.length == 1) {
        sec = '0' + sec;
    }
    let today = DayNmae[a.getDay() - 1];
    let month = Months[a.getMonth()];
    let year = a.getFullYear();
    let date = a.getDate();
    document.getElementById('time').innerHTML = hours + ':' + min + ':' + sec;
    document.getElementById('last').innerHTML = last;
    document.getElementById('day').innerHTML = today + ',' + date + ' ' + month + ',' + year;
}