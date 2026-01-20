const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Java' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Ruby' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Angular' },
    //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
    document.getElementById('employeesDetails').innerHTML = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
}

function calculateTotalSalaries() {
    let totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    document.getElementById('employeesDetails').innerHTML =
        hrEmployees.map((employee, index) =>
            `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        ).join('');
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function findBySpecialization(specialization) {
    const foundEmployees = employees.filter(
        employee => employee.specialization === specialization
    );

    if (foundEmployees.length > 0) {
        document.getElementById('employeesDetails').innerHTML =
            foundEmployees.map(employee =>
                `<p>${employee.id}: ${employee.name} - ${employee.specialization}</p>`
            ).join('');
    } else {
        document.getElementById('employeesDetails').innerHTML =
            "No such employee has been found with this specialization";
    }
}