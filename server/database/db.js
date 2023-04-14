const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        let connect = await mongoose.connect("mongodb+srv://rahultophat:A9907761728@cluster0.oc5xsjy.mongodb.net/userLogin");
        if (connect) {
            console.log("Database connection successfuly");
        }
    } catch (error) {
        console.log(`connection error in database ${error}`);
    }
}


module.exports =  dbConnect ;