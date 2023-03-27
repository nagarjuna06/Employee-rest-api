const express = require('express')
const { getEmployeeList, addEmployee, updateEmployeeData, deleteEmployee } = require('./employee')
const route = express.Router()

route.get('/', getEmployeeList);
route.post('/', addEmployee);
route.put('/:id', updateEmployeeData);
route.delete('/:id', deleteEmployee)

module.exports = route