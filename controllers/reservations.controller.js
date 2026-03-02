const reservationsServices = require('../services/reservations.services');


exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await reservationsServices.getAllReservations(req.params.id);
        if (!reservations || reservations.length === 0) {
            return res.status(404).json({ message: 'Aucune réservation trouvée' });
        }
        res.status(200).json( reservations );

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des réservations', error });
    }
}

exports.getByIdReservation = async (req, res) => {
    try {
        const reservation = await reservationsServices.getByIdReservation(req.params.id, req.params.idReservation);
        if (!reservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }
        res.status(200).json( reservation );

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de la réservation', error });
    }
}

exports.createReservation = async (req, res) => {
    try {
        const reservation = await reservationsServices.createReservation(req.body);
        res.status(201).json( reservation );

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de la réservation', error });
    }
}

exports.updateReservation = async (req, res) => {
    try {
        const reservation = await reservationsServices.updateReservation(req.params.id, req.params.idReservation, req.body);
        if (!reservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }
        res.status(200).json( reservation );

    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la réservation', error });
    }
}

exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await reservationsServices.deleteReservation(req.params.id, req.params.idReservation);
        if (!reservation) {
            return res.status(404).json({ message: 'Réservation non trouvée' });
        }
        res.status(200).json({ message: 'Réservation supprimée avec succès', reservation });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de la réservation', error });
    }
}