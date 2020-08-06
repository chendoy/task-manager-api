const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => {console.log('Mongoose is connected to port 27017')})
.catch(() => { console.log('Unable to connect to Mongodb')})