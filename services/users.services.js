exports.getAll = (req, res) => {
  res.send('Get all users');
}

exports.getById = (req, res) => {
    const userId = req.params.id;
    res.send(`Get user with id ${userId}`);
}

exports.create = (req, res) => {
  res.send('Create a new user');
}

exports.update = (req, res) => {
  const userId = req.params.id;
  res.send(`Update user with id ${userId}`);
}

exports.delete = (req, res) => {
  const userId = req.params.id;
  res.send(`Delete user with id ${userId}`);
}