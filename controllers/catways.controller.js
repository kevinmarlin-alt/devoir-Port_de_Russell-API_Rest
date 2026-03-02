exports.getAllCatways = async (req, res) => {
  try {
    const catways = await catwaysServices.getAllCatways();
    if(!catways || catways.length === 0) {
      return res.status(404).json({ message: 'Aucun catway trouvé' });
    }
    res.status(200).json( catways );

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des catways', error });
  }
}


exports.getById = (req, res) => {
  try {
    const catway = catwaysServices.getCatwayById(req.params.catwayNumber);
    if (!catway) {
      return res.status(404).json({ message: 'Catway non trouvé' });
    }
    res.status(200).json( catway );

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du catway', error });
  }
}

exports.createCatway = async (req, res) => {
  try {
    const catway = await catwaysServices.createCatway(req.body)
    res.status(201).json( catway )

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du catway', error });
  }
}  
 
  
exports.updateCatway = async (req, res) => {
  try {
    const catway = await catwaysServices.updateCatway(req.params.catwayNumber, req.body);
    if (!catway) {
      return res.status(404).json({ message: 'Catway non trouvé' });
    }
    res.status(200).json( catway );

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du catway', error });
  }
}

exports.deleteCatway = async (req, res) => {
  try {
    
    const catway = await catwaysServices.deleteCatway(req.params.catwayNumber);
    if(!catway) {
      return res.status(404).json({ message: 'Catway non trouvé' });
    }
    res.json({ message: `Catway with number ${req.params.catwayNumber} deleted successfully` });

  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du catway', error });
  }
}