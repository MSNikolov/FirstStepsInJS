

function day (a){
    const weekDays = {
        "Monday": 1,
        "Thursday": 2,
        "Wednesday": 3,
        "Tuesday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
    }
    return weekDays[a] ? weekDays[a] : "error";
}

console.log(day("Monday"))