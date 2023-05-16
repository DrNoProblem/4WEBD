const mongoose = require('mongoose');

const payementSchema = new mongoose.Schema({

    nameCard: {
        type: String,
        required: true,
        allowNull: false
    },
    numbersCard: {
        type: Number,
        required: true,
        allowNull: false
    },
    CVVCard: {
        type: Number,
        required: true,
        allowNull: false,
    },
    dateCard: {
        type: String,
        required: true,
        allowNull: false,
    },
    ownerCard: {
        type: Array,
        required: false
    }

});

const Payement = mongoose.model('Payement', payementSchema);

module.exports = Payement;

