const {User} = require('../models');

class userService {
    static async create(payload){
        try{
            const user = await User.create(payload);

            return user;
        }
        catch(error){
            throw error;
        }
    }

    static async getUsers(){
        try{
            const users = await User.findAll();
            return users;
        }
        catch(error){
            throw error;
        }
    }

    static async getUser(id){
        try{
            const user = await User.findByPk(id);

            return user;
        }
        catch(error){
            throw error;
        }
    }

    static async update(id,payload){
        try{
            const user = await User.findByPk(id);
            Object.keys(payload).forEach(key=>{
                user[key] = payload[key]
            });
           
            return  await user.save();
        }
        catch(error){
            throw error;
        }
    }

    static async delete(id){
        try{
            const user = await User.findByPk(id);
            const deleteUser = await user.destroy();

            return deleteUser;

        }
        catch(error){
            throw error;

        }
    }
}

module.exports = userService