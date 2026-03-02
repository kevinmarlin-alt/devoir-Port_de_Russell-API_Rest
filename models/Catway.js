const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * @swagger
 * components:
 *   schemas:
 *     Catway:
 *       type: object
 *       required:
 *         - catwayNumber
 *         - catwayType
 *         - catwayState
 *       properties:
 *         catwayNumber:
 *           type: number
 *           description: Numéro du catway (doit être unique)
 *         catwayType:
 *           type: string
 *           enum: [short, long]
 *           description: Type du catway (short ou long)
 *         catwayState:
 *           type: string
 *           description: État du catway (par défaut "bon état")
 */
const CatwaySchema = new Schema({
    catwayNumber: {
        type: Number,
        required: true,
        unique: true
    },  
    catwayType: {
        type: String,
        enum: ["short", "long"],
        required: true
    },
    catwayState: {
        type: String,
        trim: true,
        default: "bon état",
        required: true
    }
})

module.exports = mongoose.model("Catway", CatwaySchema)