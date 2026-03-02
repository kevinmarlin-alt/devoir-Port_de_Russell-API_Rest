const Reservation = require('../models/Reservation');

exports.getAllReservations = (catwayId) => {
    return Reservation.find({ catwayId });
}

exports.getByIdReservation = (catwayId, reservationId) => {
    return Reservation.findOne({ catwayId, _id: reservationId });
}

exports.createReservation = (reservationData) => {
    const reservation = new Reservation(reservationData);
    return reservation.save();
}

exports.updateReservation = (catwayId, reservationId, reservationData) => {
    return Reservation.findOneAndUpdate({ catwayId, _id: reservationId }, reservationData, { new: true });
}

exports.deleteReservation = (catwayId, reservationId) => {
    return Reservation.findOneAndDelete({ catwayId, _id: reservationId });
}