const dbconfig = require('../config/dbconfig')
const {Sequelize, DataTypes}=require('sequelize')

const sequelise=new Sequelize (

    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
       host : dbconfig.Host,
       dialect:dbconfig.DIALECT
    }

)

//Promise
sequelise.authenticate()
.then(()=>{
    console.log('Connected')
    
}).catch(err=>{
    console.log('Error'+err)
})

//data connecting
const db={}

 db.Sequelize = Sequelize;
    
db.sequelize = sequelise;

db.roles = require('./rolesModel')(sequelise,DataTypes),
db.employee = require('./employeeModel')(sequelise,DataTypes)

//one To One Relation 
db.roles.hasOne(db.employee,{foreignkey:'rolesid',})
 db.employee.belongsTo(db.roles,{foreignkey:'rolesid',})
 

//function
sequelise.sync ({force : false})
.then(()=>{
    console.log('tables created')
})


module.exports = db   