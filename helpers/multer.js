const multer = require('multer')

const storageBanner = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/image_banner')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, file.originalname)
    }
})

const uploadBanner = multer({ storage: storageBanner });

module.exports = { 
    uploadBanner,
}