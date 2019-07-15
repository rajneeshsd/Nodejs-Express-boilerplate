import jwt from "jsonwebtoken";
import { config } from "../../config/config";
export default{
    issue(payload ,expiresIn){
    return jwt.sign(payload,config.secret,
        { 
            expiresIn,
        }
        );
    },
};