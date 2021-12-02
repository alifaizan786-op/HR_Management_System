const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../config/connection');
const bcrypt = require ('bcrypt');

class Employee extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Employee.init(
    {
        //creating id column
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //creating privilege column
        privilege_Level:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                max: 3
            }
        },
        //creating first name 
        first_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //creating last name 
        last_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //creating password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [8]
            }
        },
        // creating email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //referncing the role id from role table
        role_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'role',
                key: 'id'
            }
        },
        //referencing the branch id from the branch table
        branch_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'branch',
                key: 'id'
            }
        },
        remainingPTO: {
            type: DataTypes.INTEGER
        }
    },
    {
        hooks:{
            async beforeCreate(newUserData){
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData
            },
            async beforeUpdate(updatedUserData){
                updatedUserData.password = await bcrypt.hash(updatedUserData,10);
                return updatedUserData
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee'
    }
);

module.exports = Employee;