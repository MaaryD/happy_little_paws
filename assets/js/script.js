const appointmentsInfo = document.getElementById("appointmentsInfo");
const appointmentsInput = document.querySelector(".appointmentsInput");

const ownerInput = appointmentsInfo['owner'];
const dateInput = appointmentsInfo['date'];

const appointments = [];

function add(owner, date) {
    appointments.push({owner, date});
    return {owner, date};
}

function showInfo({owner, date}) {
    if (appointmentsName.length === 0, appointmentsDate.length === 0) {
        appointmentsInput.innerHTML = '<div><h1>No appointments</h1></div>';
    } else {
        const div = document.createElement("div");
        const appointmentName = document.createElement("h3");
        const appointmentDate = document.createElement("h2");

        div.append(appointmentName, appointmentDate);
        appointmentsInput.appendChild(div);
    }
}

appointments.forEach(showInfo);

const newAppointment = add(
    ownerInput.value,
    dateInput.value
)

showInfo(add);