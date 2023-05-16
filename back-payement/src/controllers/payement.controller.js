const Payement = require("../models/payement.model");
const { body, validationResult } = require('express-validator');

//! Get Payement by id
exports.getPayementById = async (req, res) => {
    const { id } = req.params;
    try {
        const payement = await Payement.findById(id);
        res.status(200).json(payement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


//! Create new Payement
exports.createPayement = [
    body('nameCard')
        .notEmpty().withMessage('nameCard is required.')
        .isString().withMessage('nameCard should be a string.'),
    body('numbersCard')
        .notEmpty().withMessage('numbersCard is required.')
        .isInt().withMessage('numbersCard should be a number.'),
    body('dateCard')
        .notEmpty().withMessage('dateCard is required.')
        .isString().withMessage('dateCard should be a string.'),
    body('CVVCard')
        .notEmpty().withMessage('CVVCard is required.')
        .isInt().withMessage('CVVCard should be a number.'),
    body('ownerCard')
        .notEmpty().withMessage('ownerCard is required.')
        .isString().withMessage('ownerCard should be a string.'),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { nameCard, numbersCard, CVVCard, dateCard, ownerCard } = req.body;
        try {
            const payement = await Payement.create({
                nameCard,
                numbersCard,
                CVVCard,
                dateCard,
                ownerCard
            });
            res.status(201).json(payement);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
];

//! Update Payement by id
exports.updatePayement = async (req, res) => {
    const { id } = req.params;
    const { nameCard, numbersCard, CVVCard, dateCard, ownerCard } = req.body;

    (req, res, next) => {
        const { dispoPlace } = req.body;
        if (parseInt(dispoPlace) < 0) {
            return res.status(400).json({ message: 'This payement is full booked.' });
        }
        next();
    }

    try {
        const payement = await Payement.findByIdAndUpdate(id, {
            nameCard,
            numbersCard,
            CVVCard,
            dateCard,
            ownerCard
        }, { new: true }
        );
        res.status(200).json(payement);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//! Delete Payement by id
exports.deletePayement = async (req, res) => {
    const { id } = req.params;
    try {
        await Payement.findByIdAndDelete(id);
        res.json({ message: "Payement deleted successfully" });
    } catch (err) {
        next(err);
    }
};