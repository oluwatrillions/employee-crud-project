const mongoose = require('mongoose')

const DBconnect = async() => {
    try {
        await mongoose.connect(process.env.URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.log(error.message);
    }
}
    

module.exports = DBconnect