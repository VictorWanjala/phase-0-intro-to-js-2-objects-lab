// Write your solution in this file!
var employee = {
    name:'Victor Wanjala', 
    streetAddress: '156 Utawala',

}

function updateEmployeeWithKeyAndValue(employee, key, value){
 return{
    ...employee,
    name:'Sam',
    streetAddress: '11 Broadway',
   
 }
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}