import userDataModel from "../model/userDataModel.js";
async function userDataController(req,resp){
    let data=await userDataModel()
resp.status(200).json({
    "message":"Data submited",
    "data":data
});




}
export default userDataController;