const db = require("../models/index")

module.exports = (sequelize,DataTypes)=>{
    const employee = sequelize.define("employee",{
        id:{
           type :DataTypes.INTEGER,
           primaryKey:true,  autoIncrement: true,
        },
        Fname:{
           type : DataTypes.STRING,
           allownull :false
       },
       Lname:{
        type : DataTypes.STRING,
        allownull :false
       },
       Email:{
        type : DataTypes.STRING,
        allownull :false
       },
       rolesid:{
           type:DataTypes.INTEGER,
           ForeignKey:true,
       }
    }, { timestamps: false });
    
    return employee
}
