const Catway = require('../models/catway.model');

exports.getAllCatways = () => {
    return Catway.find();
}

exports.getCatwayById = (catwayNumber) => {
    return Catway.findOne({ catwayNumber });
}

exports.createCatway = (data) => {
    const catway = new Catway(data);
    return catway.save();
}

exports.updateCatway = (catwayNumber, data) => {
    return Catway.findOneAndUpdate({ catwayNumber }, data, { new: true });
}

exports.deleteCatway = (catwayNumber) => {
    return Catway.findOneAndDelete({ catwayNumber });
}