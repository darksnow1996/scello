const {Response} = require('../helpers');
const {userService} = require('../services');

class userController{
    static async create(req,res,next){
        try{
        const {fname,lname,email,phone} = req.body;
        const payload = {
            fname,
            lname,
            phone,
            email

        }
        const user = await userService.create(payload);
        return Response.ok(res,{
            user,
            message:"User created successfully"
        });
    }
    catch(error){
        next(error);
    }

    }

    static async updateUser(req,res,next){
        try{
            const {userId, fname,lname,email,phone} =req.body;
           let payload = {};
            if(fname){
                payload.fname = fname;
            }
         if(lname){
                payload.lname = lname;
            }
             if(email){
                payload.email = email;
            }
             if(phone){
                payload.phone = phone;
            }
          //  console.log(payload);
            const update = await userService.update(userId,payload);

        return Response.ok(res, {
            user:update,
            message:"User updated successfully"
        })
        }
        catch(error){
            next(error);
        }
    }

    static async getAllUsers(req,res,next){
        try{
            const users = await userService.getUsers();
            return Response.ok(res,{
                users
            })

        }
        catch(error){
            next(error);
        }
    }

    static async getUser(req,res,next){
        try{
            const {userId} = req.params;
            const user = await userService.getUser(userId);
            return Response.ok({
                user
            })
        }
        catch(error){
            next(error);
        }
    }

    static async deleteUser(req,res,next){
        try{
            const {userId} = req.body;
            if(!userId){
                const error = new Error("User Id input required");
                error.statusCode = 422;
                throw error;
            }
            const user = await userService.delete(userId);

            return Response.ok(res,{
               
                message:"User deleted successfully"
            })
        }
        catch(error){
            next(error);
        }
    }

}

module.exports = userController;