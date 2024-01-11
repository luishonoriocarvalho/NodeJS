const mongoose = require("mongoose")

const connectToDatabase = async() => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.hktz2kb.mongodb.net/`)
}

module.exports = connectToDatabase