const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Branch extends Model {
}

Branch.init(
    {
        //creating id column for the branch
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //referencing to the employee table where it will look for the employee with a manager role and has to match with the branch id
        // manager: {
        //     type: DataTypes.INTEGER,
        //     references:{
        //         model: 'employee',
        //         key: 'id'
        //     }
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'branch'
    }
);

module.exports = Branch;