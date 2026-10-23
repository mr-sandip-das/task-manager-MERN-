import userModel from "../model/userModel.js";
function userController(req,resp){
resp.status(200).json({
    "message":"Data submited",
    "data":req.body
})
userModel(req.body);
}
export default userController;
