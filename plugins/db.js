module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/graduation-design-database', { useNewUrlParser: true, useUnifiedTopology: true })
    // mongoose.connect('mongodb://127.0.0.1:27017/graduation-design-database', { useNewUrlParser: true, useUnifiedTopology: true })
}