import User from "../models/userModels.js";
import { successResponse, failedResponse } from "../config/response.js"
import path from "path";

export const getUsers = async(req,res) => {
    try {
        const response = await User.findAll();
        successResponse(200, response, "Success Get All Data User", res);
    } catch (error) {
        failedResponse(400, error.message, "Failed Get All Data User", res);
    }
}

export const getUserById = async(req,res) => {
    try {
        const response = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        successResponse(200, response, "Succes Get Data User By Id", res);
    } catch (error) {
        failedResponse(400, error.message, "Failed Get User By Id", res);
    }
}

export const createUser = async(req,res) => {
    try {
        const response = await User.create(req.body);
        successResponse(200, response, "Success Create Data User", res);
    } catch (error) {
        failedResponse(400, error.message, "Failed Create Data User", res);
    }
}

export const updateUser = async(req,res) => {
    try {
        const response = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        successResponse(200, response, "Success Update Data User", res);
    } catch (error) {
        failedResponse(400, error.message, "Failed Update Data User", res);
    }
}

// export const addImage = async(req,res) => {
//     if(req.files === null) return failedResponse(400, error.message, "No File Uploaded", res);
//     const name = req.body.title;
//     const file = req.files.file;
//     const fileSize = file.data.length;
//     const ext = path.extname(file.name);
//     const fileName = file.md5 + ext;
//     const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//     const allowedType = ['.png', '.jpg', '.jpeg'];

//     if(!allowedType.includes(ext.toLowerCase())) return failedResponse(422, error.message, "Invalid Images", res);
//     if(fileSize < 5000000) failedResponse(422, error.message, "Image Must be less than 5 MB", res);

//     file.mv(`./public/images/${fileName}`, async(err) => {
//         if(err) return res.status(500).json({msg: err.message});
//         try {
//             const response = await User.create({
//                 name: name,
//                 image: fileName,
//                 url: url
//             });
//             successResponse(200, response, "Succes Upload Image", res)
//         } catch (error) {
//             failedResponse(400, error.message, "Failed Upload Gambar" ,res)
//         }
//     })
// }

export const deleteUser = async(req,res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        successResponse(200, response, "Success Delete Data User", res);
    } catch (error) {
        failedResponse(400, error.message, "Failed Delete Data User", res);
    }
}

