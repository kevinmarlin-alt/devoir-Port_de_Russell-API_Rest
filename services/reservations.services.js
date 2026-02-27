exports.getAll = (req, res) => {
    const catwayId = req.params.id;
    res.send(`Get all reservations for catway with id ${catwayId}`);
}

exports.getById = (req, res) => {
    const catwayId = req.params.id;
    const reservationId = req.params.idReservation;
    res.send(`Get reservation with id ${reservationId} for catway with id ${catwayId}`);
}

exports.create = (req, res) => {
    const catwayId = req.params.id;
    res.send(`Create a new reservation for catway with id ${catwayId}`);
}

exports.update = (req, res) => {
    const catwayId = req.params.id;
    const reservationId = req.params.idReservation;
    res.send(`Update reservation with id ${reservationId} for catway with id ${catwayId}`);
}

exports.delete = (req, res) => {
    const catwayId = req.params.id;
    const reservationId = req.params.idReservation;
    res.send(`Delete reservation with id ${reservationId} for catway with id ${catwayId}`);
}