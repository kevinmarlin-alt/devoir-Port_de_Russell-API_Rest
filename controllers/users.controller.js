const usersServices = require('../services/users.services');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await usersServices.getAllUsers();
    if(!users || users.length === 0) {
      return res.status(404).json({ message: 'Aucun utilisateur trouvé' });
    }
    res.status(200).json( users );

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error });
  }
}

exports.getUserByEmail = async (req, res) => {
  try {
    const user = await usersServices.getUserByEmail(req.params.email);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.status(200).json( user );

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur', error });
  }
    
}

exports.createUser = async (req, res) => {
  try {
      const user = await usersServices.createUser(req.body);
      res.status(201).json( user );

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
  }  
}

exports.updateUser = async (req, res) => {
  try {
    const user = await usersServices.updateUser(req.params.email, req.body);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.status(200).json( user );

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur', error });
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await usersServices.deleteUser(req.params.email);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    res.status(204).json({ message: 'Utilisateur supprimé avec succès' });

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur', error });
  }
}