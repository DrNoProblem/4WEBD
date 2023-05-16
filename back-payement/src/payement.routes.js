const express = require("express");
const router = express.Router();
const payementController = require("./payement.controller");
/* const authController = require("./auth.controller"); */
const { check, validationResult } = require("express-validator");


//! private route to get an Payement by id
router.get(
    "/:id",
/*     authController.protect, */
    payementController.getPayementById
);


//! private route to create an Payement
router.post(
    "/",
/*     authController.protect, */
    payementController.createPayement
);

//! private route to update Payement information
router.put(
    "/:id",
    [
        check("name").notEmpty(),
        check("picture").notEmpty(),
        check("maxPlace").notEmpty(),
        check("dispoPlace").notEmpty(),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
/*     authController.protect, */
    payementController.updatePayement
);

//! private route to delete an Payement
router.delete(
    "/:id",
/*     authController.protect, */
    payementController.deletePayement
);


module.exports = router;
