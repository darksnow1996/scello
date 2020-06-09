const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    
    PORT:process.env.PORT || "4500",
    dbConfig: {
        HOST: "postgres",
        USER: "postgres",
        PASSWORD: "gunsmoke97",
        DB: "scello",
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}