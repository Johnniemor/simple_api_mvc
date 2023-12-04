const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://superAdmin:admin@cluster0.rrn65hy.mongodb.net/simple_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log(`Connect to MongoDB Successful`)).catch((error) => {
  console.log(`Connected failure : ${error}`)
})
