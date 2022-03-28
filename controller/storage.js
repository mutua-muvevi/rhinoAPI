const Storage = require("../model/storage");
const ErrorResponse = require("../utils/errorResponse");

// post storage
exports.postStorage = async (req, res, next) => {
    const { fullnames, email, company, shipaddress, consignfullnames, consignemail, consignaddress, consigncompany, storagecity, storagecountry, warehousetype, weight, weightunit, producttype, pieces, datein, intime, dateout, outtime, trackno, idno, quality, product, packaging, observation, collectoraddress, collectortel, collectedby, notes } = req.body

    try {
        const existingTrackNo = await Storage.findOne({trackno})

        if (existingTrackNo) {
            return next(new ErrorResponse("This track number already exists, please try another", 400))
        }

        const storage = await Storage.create({ fullnames, email, company, shipaddress, consignfullnames, consignemail, consignaddress, consigncompany, storagecity, storagecountry, warehousetype, weight, weightunit, producttype, pieces, datein, intime, dateout, outtime, trackno, idno, quality, product, packaging, observation, collectoraddress, collectortel, collectedby, notes })

        res.status(201).json({
            success: true,
            data: storage
        })

    } catch (error) {
        next(error)
    }
}

// get all storage
exports.getAllStorage = async (req, res, next) => {
    try {
        const storageRecords = await Storage.find({}).sort({createdAt: -1})

        res.status(200).json({
            success: true,
            data: storageRecords
        })
    } catch (error) {
        next(error)
    }
}

// get specific strage
exports.getSingleStorage = async (req, res, next) => {
    try {
        const storageRecord = await Storage.findById(req.params.id)

        res.status(200).json({
            success: true,
            data: storageRecord
        })
        
    } catch (error) {
        next(error)
    }
}