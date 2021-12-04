const sequelize = require('../config/connection');
const { Employee, Role, Branch, Benefit} = require('../models');
const RoleData = require("./Json/Roles-seed.json");
const EmployeeData = require('./Json/Employee-seed.json');
const BranchData = require("./Json/Branch-seed.json");
const BenefitsData = require("./Json/Benefits-seed.json");
//test

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

    await Benefit.bulkCreate(BenefitsData,{
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