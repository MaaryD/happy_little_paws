const ownerInput = document.getElementById("ownerInput");
const dateInput = document.getElementById("dateInput");
const appointmentsInput = document.getElementById("appointmentsInput");
let appointmentsName = (localStorage.getItem("appointmentsName")) ? JSON.parse(localStorage.getItem("appointmentsName")) : [];
let appointmentsDate = (localStorage.getItem("appointmentsDate")) ? JSON.parse(localStorage.getItem("appointmentsDate")) : [];

showInfo();

function add() {
    const appointmentName = ownerInput.value;
    const appointmentDate = dateInput.value;
    appointmentsName.push(appointmentName);
    appointmentsDate.push(appointmentDate);
    console.log(appointmentName, appointmentDate);
    console.log(appointmentsDate, appointmentsName);
    updateStorage();
}

function updateStorage() {
    localStorage.setItem("appointmentsName", JSON.stringify(appointmentsName));
    localStorage.setItem("appointmentsDate", JSON.stringify(appointmentsDate));
    showInfo();
}

function showInfo() {
    if (appointmentsName.length === 0, appointmentsDate.length === 0) {
        appointmentsInput.innerHTML = '<div><h1>No appointments</h1></div>';
    } else {
        appointmentsInput.innerHTML = "";
        for (const appointmentName of appointmentsName) {
            const div = document.createElement("div");

            const divName = document.createElement("h3");
            divName.innerText = appointmentName;
            div.appendChild(divName);
            appointmentsInput.appendChild(div);

            for (const appointmentDate of appointmentsDate) {

                const divDate = document.createElement("h4");
                divDate.innerText = appointmentDate;
                div.appendChild(divDate);
                appointmentsInput.appendChild(div);
            
            const divButtons = document.createElement("div");

            const btnEdit = document.createElement("button");
            btnEdit.innerText = "Edit";
            btnEdit.onclick = () => editInput(appointmentName, appointmentDate);
            divButtons.appendChild(btnEdit);
            div.appendChild(divButtons);

            const btnDelete = document.createElement("button");
            btnDelete.innerText = "Delete";
            btnDelete.onclick = () => deleteInput(appointmentName, appointmentDate);
            divButtons.appendChild(btnDelete);
            div.appendChild(divButtons);
        }
    }
    }
}


function editInput(appointmentName, appointmentDate) {
    const indexName = appointmentsName.indexOf(appointmentName);
    const indexDate = appointmentsDate.indexOf(appointmentDate);
    const newName = prompt(`Ingresa la información nueva: $(appointmentName)`);
    const newDate = prompt(`Ingresa la información nueva: $(appointmentDate)`);
    appointmentsName[indexName] = newName;
    appointmentsDate[indexDate] = newDate;
    updateStorage();
}

function deleteInput(appointmentName, appointmentDate) {
    const indexName = appointmentsName.indexOf(appointmentName);
    const indexDate = appointmentsDate.indexOf(appointmentDate);
    appointmentsName.splice(indexName, 1);
    appointmentsDate.splice(indexDate, 1);
    updateStorage();
}
