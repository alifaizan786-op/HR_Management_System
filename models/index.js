const Employee = require('./Employee')
const Role = require('./Role')
const Benefit = require('./Benefit')
const Time_off = require('./TimeOff')
// const { Model } = require('sequelize/types')

Role.hasMany(Employee,{
    foreignKey:"role_id",
    allowNull:false
});
Employee.belongsTo(Role,{
    foreignKey:"role_id",
    allowNull:false
});

Benefit.hasOne(Role,{
    foreignKey:"benefit_id",
    allowNull:false
});
Role.belongsTo(Benefit,{
    foreignKey:"benefit_id",
    allowNull:false
});


module.exports = {Employee,Role,Benefit,Time_off}