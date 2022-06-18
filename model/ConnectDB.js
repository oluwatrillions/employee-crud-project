const mongoose = require('mongoose')

const DBconnect = async() => {
    try {
        await mongoose.connect(process.env.URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (error) {
        console.error(error);
    }
}

mongoose.connection.once('open', () => {
    console.log('we are connected');
})
    

module.exports = DBconnect