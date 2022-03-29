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
// update a given storage
exports.updateStorage = async (req, res, next) => {
	const { fullnames, email, company, shipaddress, consignfullnames, consignemail, consignaddress, consigncompany, storagecity, storagecountry, warehousetype, weight, weightunit, producttype, pieces, datein, intime, dateout, outtime, trackno, idno, quality, product, packaging, observation, collectoraddress, collectortel, collectedby, notes } = req.body

	try {
		const storage = await Storage.findOneAndUpdate(
			req.params.id,
			{ fullnames, email, company, shipaddress, consignfullnames, consignemail, consignaddress, consigncompany, storagecity, storagecountry, warehousetype, weight, weightunit, producttype, pieces, datein, intime, dateout, outtime, trackno, idno, quality, product, packaging, observation, collectoraddress, collectortel, collectedby, notes },
			{ new: true }
		)

		if(!storage){
			return next(new ErrorResponse("That storage record does not exist", 404))
		}

		res.status(200).json({
			succes: true,
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

// delete a given storage item
exports.deleteStorage = async (req, res, next) => {
	try {
		const storage = await Storage.findByIdAndDelete(req.params.id)

		if(!storage){
			return next(new ErrorResponse("That storage item does not exist", 404))
		}

		res.status(200).json({
			success: true,
			data: "The storage item was deleted successfully"
		})
	} catch (error) {
		next(error)
	}
}