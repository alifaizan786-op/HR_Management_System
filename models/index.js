const Employee = require('./Employee')
const Role = require('./Role')
const Benefit = require('./Benefit')
const Time_off = require('./timeOff')
// const { Model } = require('sequelize/types')

Role.hasMany(Employee, {
    foreignKey: "role_id",
    allowNull: false
});

Employee.belongsTo(Role, {
    foreignKey: "role_id",
    allowNull: false
});

Benefit.hasMany(Role, {
    foreignKey: "benefit_id",
    allowNull: false
});

Role.belongsTo(Benefit, {
    foreignKey: "benefit_id",
    allowNull: false
});

Employee.hasMany(Time_off,{
    foreignKey: "emp_id",
    allowNull:true
});

Time_off.belongsTo(Employee,{
    foreignKey:"emp_id",
    allowNull:true
});

module.exports = { Employee, Role, Benefit, Time_off }