import * as mongoose  from 'mongoose';

 class UserSchema extends mongoose.Schema{

    constructor(options:any){
   
        const baseSchema={
            name:{
                required:true,
                type:String
            },
            email:{
                required:true,
                type:String,
            }
        }


        super(baseSchema,options);
    };


}

export default UserSchema;