const moment = require('moment-timezone');
const getTime = () => {
    const indiaTime = moment().tz('Asia/Kolkata').format('DD-MM-YYYY  h:mm:ss a');
    return indiaTime
}
const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
    , createdAt: { type: String },
    updatedAt: { type: String }
});

employeeSchema.pre('save', function (next) {
    const now = getTime()
    if (!this.createdAt) {
        this.createdAt = now;
    }
    this.updatedAt = now;
    next();
})
    .pre('findOneAndUpdate', function (next) {
        const now = getTime()
        this.updateOne({}, { $set: { updatedAt: now } });
        next()
    })

module.exports = mongoose.model('employee', employeeSchema);