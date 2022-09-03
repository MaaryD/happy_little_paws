let appointmentsInfo = (localStorage.getItem("appointmentsInfo")) ? JSON.parse(localStorage.getItem("appointmentsInfo")) : [];
const ownerInput = document.getElementById("ownerInput");
const dateInput = document.getElementById("dateInput");
const appointmentsInput = document.getElementById("appointmentsInput");

let appointments = [];

showInfo();

function add(){
    const appointmentName = ownerInput.value;
    const appointmentDate = dateInput.value;
    appointmentsInfo.push({
        id: Math.random(), 
        owner: appointmentName, 
        date: appointmentDate});
    console.log(appointmentDate, appointmentName);
    console.log(appointmentsInfo);
    updateStorage();
}

function updateStorage(){
    localStorage.setItem("appointmentsInfo", JSON.stringify(appointmentsInfo));
    showInfo();
}

function showInfo(){
    if (appointmentsInfo.length === 0){
        appointmentsInput.innerHTML = '<div><h1>No appointments</h1></div>';
    } else {
        appointmentsInput.innerHTML = "";
        appointmentsInfo.map((appointment) => {
            const div = document.createElement("div");

            const divName = document.createElement("h3");
            divName.innerHTML = appointment.owner;

            const divDate = document.createElement("h4");
            divDate.innerHTML = appointment.date;

            div.append(divName, divDate);
            appointmentsInput.appendChild(div);
        })
    }
}

function editInput() {
    
}

