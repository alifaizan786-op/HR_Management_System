const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Benefit extends Model {
}

Benefit.init(
    {
        //creating id column for the benefit
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //creating a column for retirement plan name
        retirement: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //creating a column for dental plan name
        dental: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //creating a column for health plan name
        health: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ////creating a column for amount of hours available for paid time off
        paidTO: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'benefit'
    }
);

module.exports = Benefit;

//401K, Dental, Health, PTO