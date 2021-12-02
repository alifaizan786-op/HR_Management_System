const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');

class Role extends Model {
}

Role.init(
    {
        //creating id column
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //creating a role title column
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        //creating a role salary column
        salary:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        //referencing the branch id from the branch table
        branch_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'branch',
                key: 'id'
            }
        },
        //referencing the benfit id from the benfit table
        benefit_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'benefit',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'role'
    }
);

module.exports = Role;