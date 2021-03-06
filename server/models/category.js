const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const slugify = require('slugify')

const categorySchame = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [5, "Name is too short"],
        max: [35, "Name is too long"],
        trim: true
    },
    slug: {
        type: String,
        unique: true,
    },
    image: {
        url: String,
        key: String
    },
    content: {
        type: {},
        min: [20, 'Content is too short'],
        max: [20000, 'Content is to long']
    },
    postedBy: {
        type: ObjectId,
        ref: 'User',
    }




}, { timestamps: true })


categorySchame.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true })
    next()
})

module.exports = mongoose.model('Category', categorySchame)

