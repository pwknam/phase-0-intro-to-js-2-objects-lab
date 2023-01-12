const employee = {
    name: "Kyushik",
    streetAddress: "540 6th Ave",
};



function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // let newEmployee = employee
    delete employee[key];
    return employee;

};
