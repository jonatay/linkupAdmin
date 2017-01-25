
var Emp = require('../models/employee');


var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

var fetchCols = [
    'id',
    'surname',
    'first_names',
    'employee_code',
    'designation',
    'gender',
    'race',
    'id_number',
    'company_code',
    'hire_date',
    'leave_date',
    'tax_reference_number',
    'last_updated',
    'employee_group_id',
    'employee_cc_id',
    'branch_id',
    'empnum'
];

// employeesList
module.exports.employeesList = function(req,res) {
    Emp.fetchAll({
        columns:fetchCols
    }).then(function(data) {
        console.log('employees.employeeList returned '+data.length+' rows.');
        sendJSONresponse(res, 200, data)
    });
};

// employeesCreate
module.exports.employeesCreate = function(req,res) {};

// employeesReadOne
module.exports.employeesReadOne = function(req,res) {};

// employeesUpdateOne
module.exports.employeesUpdateOne = function(req,res) {};

// employeesDeleteOne
module.exports.employeesDeleteOne = function(req,res) {};

