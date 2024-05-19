let displayDate = ()=> {
    let date = new Date()

    let monthList = ["Jan",	"Feb",	"Mar",	"Apr",	"May",	"Jun",	"Jul",	"Aug",	"Sep",	"Oct",	"Nov",	"Dec"]

    let month = monthList[date.getMonth()]
    let today = date.getDate()
    let year = date.getFullYear()

    let dateToday = `${month}-${today}-${year}`
    document.getElementById('currentDate').innerHTML = dateToday
}

displayDate()

// ----------------------------------------------

let clock = () =>{
    let today = new Date();
    let hrs = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();
    let period = 'AM';

    hrs = hrs<10 ? '0'+hrs : hrs;
    mins = mins<10 ? '0'+mins : mins;
    secs = secs<10 ? '0'+secs : secs;

    if (hrs==0){
        hrs = 12;
    } else if (hrs >=12){
        period = 'PM';
        hrs = hrs-12;
    }

    let time = `${hrs}:${mins}:${secs}[${period}]`;
    document.getElementById('clock').innerHTML = time;
    setInterval(clock,1000);
}
clock()

// ---------------------------------------------------

const timeIn = document.getElementById('timeIn')
const timeInSuccessful = document.querySelector('.timeInSuccessful')

timeIn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('TIME-IN: '+ new Date)
    timeInSuccessful.classList.add('.timeInSuccessful')
    timeInSuccessful.innerHTML = 'Time-In Successful'
    setTimeout(() => timeInSuccessful.remove(), 3000)
})

const timeOut = document.getElementById('timeOut')
const timeOutSuccessful = document.querySelector('.timeOutSuccessful')

timeOut.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('TIME-OUT: '+ new Date)
    timeOutSuccessful.classList.add('.timeOutSuccessful')
    timeOutSuccessful.innerHTML = 'Time-out successful'
    setTimeout(() => timeOutSuccessful.remove(), 3000)
})

// ======================================================

const leaveForm = document.getElementById('leaveForm')
const leaveType = document.getElementById('leaveType')
const leaveDateFrom = document.getElementById('leaveDateFrom')
const leaveDateTo = document.getElementById('leaveDateTo')
const successful = document.querySelector('.successful')
const error = document.querySelector('.error')
const invalidDates = document.querySelector('.invalidDates')

leaveForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(leaveType.value === '' || leaveDateTo.value === '' || leaveDateFrom.value === ''){
        error.classList.add('error')
        error.innerHTML = 'All fields are required'
        setTimeout(() => error.remove(), 3000)
    } else if(leaveDateFrom.value > leaveDateTo.value){
        invalidDates.classList.add('invalidDates')
        invalidDates.innerHTML = 'Invalid dates'
        setTimeout(() => invalidDates.remove(), 3000)
    } else {
        console.log(leaveType.value +': '+ leaveDateFrom.value + ' to ' + leaveDateTo.value)
        leaveType.value = ''
        leaveDateFrom.value = ''
        leaveDateTo.value = ''
        successful.classList.add('successful')
        successful.innerHTML = 'Submitted'
        setTimeout(() => successful.remove(), 3000)
    }
})


