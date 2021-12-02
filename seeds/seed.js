const sequelize = require('../config/connection');
const Role = require('../models/Roles');
const Employee = require('../models/Employee');
const Branch = require('../models/Branch');
const EmployeeData = require('./EmployeeData.json')
// role ids used in json seed file 
// role IDs
// 1:sales
// 2:Branch Manager
// 3:seretary
// 4:Accountant
// 5:Wearhouse
// 6:HR
// 7:CEO