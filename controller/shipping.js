const Shipping = require("../model/shipment");
const ErrorResponse = require("../utils/errorResponse");

// post
exports.postShipment = async (req, res, next) => {
	const { shippersfullname, shippersemail, shipperscompany, shipperstelephone, shippersaddress, consignfullname, consignemail, consigncompany, consigntelephone, consignaddress, collectorfullname, collectoremail, collectortel, collectoraddress, trackno, itemsname, itemsweight, itemsweightunit, itemspieces, departureaddress, departureairportcode, departuredate, departuretime, arrivaladdress, arrivalairportcode, arrivaldate, arrivaltime, events }  = req.body

	try {
		const existing = await Shipping.findOne({trackno})

		if(existing){
			return next(new ErrorResponse("That track number already exists", 400))
		}

		const shipping = await Shipping.create({ shippersfullname, shippersemail, shipperscompany, shipperstelephone, shippersaddress, consignfullname, consignemail, consigncompany, consigntelephone, consignaddress, collectorfullname, collectoremail, collectortel, collectoraddress, trackno, itemsname, itemsweight, itemsweightunit, itemspieces, departureaddress, departureairportcode, departuredate, departuretime, arrivaladdress, arrivalairportcode, arrivaldate, arrivaltime, events } )

		res.status(201).json({
			success: true,
			data: shipping
		})
	} catch (error) {
		next(error)
	}

}

// update entire shipment
exports.updateEntireShipping = async (req, res, next) => {
	const { trackno, shippersfullname, departurecity, departurecountry, departuredate, consignfullnames, collectorfullname, collectoraddress, collectortel, itemsname, departuretime, arrivalcity, arrivalcountry, arrivaltime, arrivaldate, shippersemail, shippersidno, shipperstelephone, shipperscompany, shippersaddress, consigntelephone, consignemail, consigncompany, consignaddress, logisticstype, itemsweight, itemsweightunit, itemsproducttype, itemspieces, itemsquality, quantifiableunit, events } = req.body

	try {
		const shipping = await Shipping.findOneAndUpdate(
			{ trackno },
			{ trackno, shippersfullname, departurecity, departurecountry, departuredate, consignfullnames, collectorfullname, collectoraddress, collectortel, itemsname, departuretime, arrivalcity, arrivalcountry, arrivaltime, arrivaldate, shippersemail, shippersidno, shipperstelephone, shipperscompany, shippersaddress, consigntelephone, consignemail, consigncompany, consignaddress, logisticstype, itemsweight, itemsweightunit, itemsproducttype, itemspieces, itemsquality, quantifiableunit, events },
			{ new: true }
		)

		if(!shipping) {
			return next(new ErrorResponse("That shipping record does not exist", 404))
		}

		res.status(200).json({
			success: true,
			data: shipping
		})
	} catch (error) {
		next(error)
	}
}

// update an event
exports.updateShipping = async (req, res, next) => {
	try {
		const { trackno, timeevents, dateevents, currentlocation, shippingstatus, notes, number } = req.body

		

		const shipping = await Shipping.findOne({trackno})

		if(!shipping){
			return next(new ErrorResponse("Item with that track number doesn't exist", 404))
		}

		shipping.events.push({ timeevents, dateevents, currentlocation, shippingstatus, notes, number})
		
		await shipping.save()

		res.status(200).json({
			success: true,
			data: shipping
		})

	} catch (error) {
		next(error)
	}
}

// get all
exports.getAllShippingRecords = async (req, res, next) => {
	try {
		const shipping = await Shipping
			.find({})
			.sort({createdAt: -1})
		
		res.status(200).json({
			success: true,
			data: shipping
		})

	} catch (error) {
		next(error)
	}
}

exports.getShippingById = async (req, res, next) => {
	try {
		const shipping = await Shipping.findById(req.params.id)

		if (!shipping){
			return next(new ErrorResponse("The shipping record you are looking for is not available", 400))
		}

		res.status(200).json({
			success: true,
			data: shipping
		})

	} catch (error) {
		next(error)
	}
}

// get by track number
exports.getShippingByTrack = async (req, res, next) => {
	
	const { trackno } = req.body

	try {
		if (!trackno){
			return next(new ErrorResponse("Shipment Track number is required", 400))
		}
		
		const shipping = await Shipping.findOne({ trackno })

		if (!shipping){
			return next(new ErrorResponse("No shipment with that track number!", 400))
		}

		res.status(200).json({
			success: true,
			data: shipping
		})

	} catch (error) {
		next(error)
	}
}

// delete a given shipment
exports.deleteShipping = async (req, res, next) => {


	try {
		const shipping = await Shipping.findByIdAndDelete(req.params.id)

		if(!shipping){
			return next(new ErrorResponse("That shipping record does not exist", 404))
		}

		res.status(200).json({
			success: true,
			data: "The shipping item was deleted successfully"
		})

	} catch (error) {
		next(error)
	}
}