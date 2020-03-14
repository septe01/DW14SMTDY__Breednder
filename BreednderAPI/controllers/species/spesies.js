const Species = require("../../models").spesies;

exports.index = async (req, res) => {
  try {
    const getAll = await Species.findAll();
    if (getAll.length > 0) {
      res.status(200).send({
        status: 200,
        message: "success",
        getAll
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "not found"
      });
    }
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Bad Request"
    });
  }
};

exports.store = async (req, res) => {
  try {
    const addSpecies = await Species.create(req.body);
    res.status(200).send({
      status: 200,
      message: "success",
      addSpecies
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Bad Request"
    });
  }
};

exports.update = async (req, res) => {
  try {
    let result = await Species.update(req.body, {
      where: { id: req.params.id }
    });
    let resultUpdate = await Species.findOne({ where: { id: req.params.id } });
    if (result) {
      res.status(200).send({
        status: 200,
        message: "success",
        resultUpdate
      });
    }
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Bad Request"
    });
  }
};

exports.delete = async (req, res) => {
  try {
    let result = await Species.destroy({
      where: { id: req.params.id }
    });
    if (result) {
      res.status(200).send({
        status: 200,
        message: "success",
        id: req.params.id
      });
    }
  } catch (error) {
    res.status(400).send({
      status: 400,
      message: "Bad Request"
    });
  }
};
