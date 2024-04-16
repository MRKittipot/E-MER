const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
    url,
    file: (req, file) => {
        if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
            return{
                bucketName : "photos",
                filename : `${Date.now()}_${file.originalname}`,
            }
        }else{
            throw new Error("Invalid file type");
        }
    }
});

const upload = multer({ storage })

const uploadImage = (req,res) => {
    upload.single("avatar");
    const file = req.file;

    res.send({
        message: "Uploaded",
        id: file.id,
        name: file.filename,
        contentType: file.contentType
    })
}

module.exports = uploadImage;