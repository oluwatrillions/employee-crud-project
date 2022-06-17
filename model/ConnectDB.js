const mongoose = require('mongoose')

const DBconnect = async() => {
    try {
        await mongoose.connect(process.env.URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('up and running');
    } catch (error) {
        console.error(error);
    }
}
    

module.exports = DBconnect