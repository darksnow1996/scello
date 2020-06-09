const expressLoader = require('./express');
const sequelize = require('./postgres');




module.exports = async(app)=> {
    try{
         expressLoader(app);
         await sequelize.sync();
        
         console.log('Database Connected');
      
    }
    catch(error){
       throw error;
    }
}