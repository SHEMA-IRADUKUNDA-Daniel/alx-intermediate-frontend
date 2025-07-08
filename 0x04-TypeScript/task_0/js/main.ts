interface student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: student = {
  firstName: "Daniel",
  lastName: "Shema",
  age: 26,
  location: "Kigali",
};
const student2: student = {
  firstName: "Gad",
  lastName: "Ishimwe",
  age: 28,
  location: "Munich",
};

const studentsList: student[] = [student1, student2];

const table = document.createElement("table");
table.border = "1";
table.style.borderCollapse = "collapse";

const tableHeader = table.insertRow();
const headerCell1 = document.createElement("th");
headerCell1.textContent = "First Name";
const headerCell2 = document.createElement("th");
headerCell2.textContent = "Location";
tableHeader.appendChild(headerCell1);
tableHeader.appendChild(headerCell2);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});
document.body.appendChild(table);
