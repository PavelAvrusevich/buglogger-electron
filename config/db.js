const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://buglogger:buglogger@cluster0.agafg.mongodb.net/buglogger?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            }
        );

        console.log('MongoDB Connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;
