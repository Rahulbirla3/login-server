const taskModel = require('../model/taskSchema');
const userModel = require('../model/schema');

exports.getTaskDataController = async (req, res) => {
    try {
        const newDocum = await taskModel.find({});
        console.log(newDocum);
        console.log("newDocum");

        if (!newDocum) {
            res.status(501).send({
                success: false,
                message: "Task is not availble in database",
            })
        } else {
            res.status(200).send({
                success: true,
                message: "data received successfully",
                newDocum
            })
        }
    } catch (error) {
        res.status(501).send({
            success: false,
            message: "Internal server error add data",
            error
        })
    }
}

exports.postTaskDataController = async (req, res) => {

    const user = req.rootUser;
    console.log(user);

    try {
        const { taskId, taskDescription, taskTimer, userId } = req.body;

        if (!taskId || !taskDescription || !taskTimer) {
            res.status(404).send({
                success: false,
                message: "Please fill all the fileds"
            })
        } else {
            const newDocum = new taskModel({ taskId, taskDescription, taskTimer })
            // console.log(newDocum);

            const existingUser = await userModel.findOne({ _id: user._id.toString() });

            await newDocum.save();
            existingUser.tasks.push(newDocum);
            await existingUser.save();

            res.status(200).send({
                success: true,
                message: "data Submitted successfully",
            })
        }
    } catch (error) {
        res.status(501).send({
            success: false,
            message: "Internal server error add data",
            error
        })
    }

}


exports.updateTaskvalueController = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {

        if (!id) {
            res.status(404).send({
                success: false,
                message: "id not found"
            })
        } else {
            const user = await taskModel.findOne({ _id: id });
            console.log(user._id);
            if (!user) {
                res.status(404).send({
                    success: false,
                    message: "User does not exist"
                })
            } else {
                const updatedData = await taskModel.findByIdAndUpdate(user._id, { ...req.body });
                console.log(updatedData);
                res.status(200).send({
                    success: true,
                    message: "Data updated in database successfully"
                })
            }
        }
    } catch (error) {
        res.status(501).send({
            success: false,
            message: "Internal server error in update data",
            error
        })
    }
}

exports.deleteTaskValueController = async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    try {
        const user = await taskModel.findOne({ _id });
        // console.log("hiii");
        // console.log(user._id);
        if (!user) {
            res.status(404).send({
                success: false,
                message: "User does not exist"
            })
        } else {
            const deletedData = await taskModel.findByIdAndDelete(_id);
            // console.log(deletedData);
            // await user.save();
            res.status(200).send({
                success: true,
                message: "Data deleted in database successfully"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(501).send({
            success: false,
            message: "Internal server error in delete data",
            error
        })
    }
}

