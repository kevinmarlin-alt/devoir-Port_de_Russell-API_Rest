const Reservation = require('../models/Reservation');

exports.getAllReservations = (catwayNumber) => {
    return Reservation.find({ catwayNumber });
}

exports.getByIdReservation = (catwayNumber, reservationId) => {
    return Reservation.findOne({ catwayNumber, _id: reservationId });
}

exports.createReservation = (reservationData) => {
    const reservation = new Reservation(reservationData);
    return reservation.save();
}

exports.updateReservation = (catwayNumber, reservationId, reservationData) => {
    return Reservation.findOneAndUpdate({ catwayNumber, _id: reservationId }, reservationData, { new: true });
}

exports.deleteReservation = (catwayNumber, reservationId) => {
    return Reservation.findOneAndDelete({ catwayNumber, _id: reservationId });
}