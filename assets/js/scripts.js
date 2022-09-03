let appointmentsInfo = (localStorage.getItem("appointmentsInfo")) ? JSON.parse(localStorage.getItem("appointmentsInfo")) : [];
const ownerInput = document.getElementById("ownerInput");
const dateInput = document.getElementById("dateInput");
const appointmentsInput = document.getElementById("appointmentsInput");

let appointments = [];

showInfo();

function add() {
    const appointmentName = ownerInput.value;
    const appointmentDate = dateInput.value;
    appointmentsInfo.push({
        id: Math.random(),
        owner: appointmentName,
        date: appointmentDate
    });
    console.log(appointmentDate, appointmentName);
    console.log(appointmentsInfo);
    ownerInput.value = "";
    dateInput.value = "";
    updateStorage();
}

function updateStorage() {
    localStorage.setItem("appointmentsInfo", JSON.stringify(appointmentsInfo));
    showInfo();
}

function showInfo() {
    if (appointmentsInfo.length === 0) {
        appointmentsInput.innerHTML = '<div><h1>No appointments</h1></div>';
    } else {
        appointmentsInput.innerHTML = "";
        appointmentsInfo.map((appointment) => {
            const section = document.createElement("section");
            section.classList.add("appointmentsInput");

            const div = document.createElement("div");
            div.classList.add("divInfo");

            const divName = document.createElement("h3");
            divName.innerHTML = appointment.owner;

            const divDate = document.createElement("h4");
            divDate.innerHTML = appointment.date;

            div.append(divName, divDate);
            appointmentsInput.appendChild(div);

            const divButtons = document.createElement("div")

            const btnEdit = document.createElement("button");
            btnEdit.innerText = "Edit";
            btnEdit.classList.add("divButtons");
            btnEdit.onclick = () => editInput();
            divButtons.appendChild(btnEdit);
            div.appendChild(divButtons);

            const btnDelete = document.createElement("button");
            btnDelete.innerText = "Delete";
            btnDelete.classList.add("divButtons");
            btnDelete.onclick = () => deleteInput();
            divButtons.appendChild(btnDelete);
            div.appendChild(divButtons);
        })
    }
}

function editInput(appointmentName, appointmentDate) {
    console.log("estoy aquí");
    const indexName = appointmentsInfo.indexOf(appointmentName);
    const indexDate = appointmentsInfo.indexOf(appointmentDate);

    const newOwner = prompt(`Ingresa la información nueva: `);
    const newDate = prompt(`Ingresa la información nueva: `);

    

    // const appointmentsInfo = [{owner, date}];
    //  appointmentsInfo = appointmentsInfo.map((appointment) =>{
    //     if (appointment.id === appointment){
    //         appointment.owner = newOwner;
    //         appointment.date = newDate;
    //     }
    // }) Sorry, no pude lograrlo

    updateStorage();
}

function deleteInput(appointmentName, appointmentDate){
    const indexName = appointmentsInfo.indexOf(appointmentName);
    const indexDate = appointmentsInfo.indexOf(appointmentDate);
    appointmentsInfo.splice(indexName && indexDate, 1);
    updateStorage();
}

