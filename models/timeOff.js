const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Time_off extends Model {
}

Time_off.init(
    {
        //creating id column for the time off request 
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // creating a column, for when the employee PTO is starting
        start_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // creating a column, for when the employee PTO is ending
        end_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        // creating a column, if the request for PTO got approved or not ( true / false )
        approval: {
            type: DataTypes.TINYINT,
            allowNull: false
        },
        // creating a column, and refercing the employee from the employee id
        emp_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id'
            }
        },
        // creating a column, for how many hours are being used by this certain request
        hours_used: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'time_off'
    }
);

module.exports = Time_off;