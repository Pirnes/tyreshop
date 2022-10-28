const tyresRouter = require("express").Router();
const Tyre = require("../models/tyre");

tyresRouter.get("/", (request, response, next) => {
  Tyre.find({})
    .then((tyres) => {
      response.json(tyres);
    })
    .catch((error) => next(error));
});

tyresRouter.post("/", (request, response, next) => {
  const body = request.body;
  const tyre = new Tyre({
    hinta: body.hinta,
    koko: body.koko,
    malli: body.malli,
    merkki: body.merkki,
    rengasID: body.rengasID,
    saldo: body.saldo,
    tyyppi: body.tyyppi,
  });
  tyre
    .save()
    .then((result) => {
      response.status(201).json(result);
    })
    .catch((error) => next(error));
});

tyresRouter.put("/:id", (request, response, next) => {
  const body = request.body;
  const tyre = {
    saldo: body.saldo,
  };

  Tyre.findByIdAndUpdate(request.params.id, tyre, { new: true })
    .then((updatedTyre) => {
      response.json(updatedTyre);
    })
    .catch((error) => next(error));
});

tyresRouter.delete("/:id", (request, response, next) => {
  Tyre.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

module.exports = tyresRouter;
