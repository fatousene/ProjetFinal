const mongoose = require('mongoose')
 const mongoString =`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.5qj6n.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(mongoString, { 
    useNewUrlParser : true, 
    useUnifiedTopology : true
}
)
.then(() => console.log('connected to db'))
.catch((err) => console.log(err));


  