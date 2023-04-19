const jwt = require('jsonwebtoken');
const userModel = require('../model/schema');

const blog_middleware = async (req, res, next) => {

    try {

        const token = req.headers.authorization;
        // console.log(token);

        const verifyToken = jwt.verify(token, 'iamadeveloper');
        // console.log(verifyToken);
        
        const rootUser = await userModel.findOne({ _id: verifyToken.id });

        if (!rootUser) {
            throw new Error('User not found');
        }else{
            req.rootUser = rootUser;
            req.userId = rootUser.id;
            // console.log("hii");
            next();
        }
        

    } catch (error) {
        res.status(401).send("unauthorised: No token found")
    }
}

module.exports = blog_middleware;

