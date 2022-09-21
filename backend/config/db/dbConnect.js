const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://bloguser:XHyHYb2ySOt9Z8YF@mern-blog-app.e74yuxg.mongodb.net/?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log('Db is connected successfully');
  } catch (err) {
    console.log(`Error ${err.message}`);
  }
};

module.exports = dbConnect;

// bloguser
// XHyHYb2ySOt9Z8YF
