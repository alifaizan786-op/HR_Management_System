const sequelize = require('../config/connection');
const Role = require('../models/Roles');
const Employee = require('../models/Employee');
const Branch = require('../models/Branch');
const Benefits = require("../models/Benefits");

const RoleData = require("./Roles-seed.json");
const EmployeeData = require('./Employee-seed.json');
const BranchData = require("./Branch-seed.json");
const BenefitsData = require("./Benifits-seed.json");


const seedsDatabase = async () => {
    await sequelize.sync({ force: true });

    await Branch.bulkCreate(BranchData,{
        individualHooks: true,
    returning: true,
    });

    await Role.bulkCreate(RoleData, {
        individualHooks: true,
        returning: true,
    });

    await Employee.bulkCreate(EmployeeData,{
        individualHooks: true,
    returning: true,
    });

    await Benefits.bulkCreate(BenefitsData,{
        individualHooks: true,
    returning: true,
    });
    process.exit(0);
}

seedsDatabase();


// role ids used in json seed file 
// role IDs
// 1:sales
// 2:Branch Manager
// 3:seretary
// 4:Accountant
// 5:Wearhouse
// 6:HR
// 7:CEO