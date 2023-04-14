const userModel = require("../model/schema");
const jwt = require("jsonwebtoken");


exports.checkUserLoginController = async (req, res) => {

    const { email, password } = req.body;
    console.log(req.body);
    try {

        if (!email || !password) {
            console.log("hi");
            res.status(403).send({
                success: false,
                message: "Please fill all the fields",
            })
        }

        const user = await userModel.findOne({ email });
        console.log(user);

        if (!user) {
            res.status(404).send({
                success: false,
                message: "User not found",
            })
        } else {
            if (user.password === password) {
                const jwtToken = jwt.sign({ id: user.id }, "iamadeveloper");
                res.status(200).send({
                    success: true,
                    message: "Login successfuly",
                    jwt: jwtToken
                })
            } else {
                res.status(401).send({
                    success: false,
                    message: "Invalid user credantials",
                })
            }
        }
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: "Some error occured in login section",
            error
        })
    }
}


exports.registerAllUserController = async (req, res) => {

    try {
        const { email, password } = req.body;

        const data = new userModel({ email, password });
        await data.save();

        res.status(200).send(JSON.stringify({
            success: true,
            message: "Data submitted in database successfully",
        }));

    } catch (error) {
        console.log(error);
        res.status(500).send(JSON.stringify({
            success: false,
            message: "Some error occured in register section",
            error
        }))
    }
}
