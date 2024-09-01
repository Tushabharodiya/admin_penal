let cloudinary = require("cloudinary").v2


// Configuration
cloudinary.config({
    cloud_name: 'dikaxyeff',
    api_key: '361618244844942',
    api_secret: 'A4kS8LAL6oZAOlweGGoMHJPANsY' // Click 'View API Keys' above to copy your API secret
});


module.exports = cloudinary;
