exports.getAll = (req, res) => {
  res.send('Get all catways');
}

exports.getById = (req, res) => {
    const catwayId = req.params.id;
  res.send(`Get catway with id ${catwayId}`);
}

exports.create = (req, res) => {
  res.send('Create a new catway');
}

exports.update = (req, res) => {
  const catwayId = req.params.id;
  res.send(`Update catway with id ${catwayId}`);
}

exports.delete = (req, res) => {
  const catwayId = req.params.id;
  res.send(`Delete catway with id ${catwayId}`);
}