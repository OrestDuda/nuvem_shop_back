const express = require("express");
const router = express.Router();

const {
  listHeroes,
  getById,
  removeHero,
  addHero,
  updateHero,
} = require("../../controllers/heroesController");

router.get("/", async (req, res, next) => {
  try {
    const allHeroes = await listHeroes();
    res.status(200).json({
      status: "ok",
      code: 200,
      message: "Success Request",
      data: allHeroes,
    });
  } catch (err) {
    return err;
  }
});

router.get("/:heroId", async (req, res, next) => {
  try {
    const heroByID = await getById(req.params.heroId);
    if (heroByID) {
      res.status(200).json({
        status: "ok",
        code: 200,
        message: "Success Request",
        data: heroByID,
      });
    } else {
      res.status(404).json({ status: "ok", code: 404, message: "Not found" });
    }
  } catch (err) {
    return err;
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCreated = await addHero(req.body);

    res.status(201).json({
      status: "ok",
      code: 201,
      message: "Added Successful",
      data: newCreated,
    });
  } catch (err) {
    return err;
  }
});

router.delete("/:heroId", async (req, res, next) => {
  try {
    const removeByID = await removeHero(req.params.heroId);
    if (removeByID) {
      res
        .status(200)
        .json({ status: "ok", code: 200, message: "Hero deleted" });
    } else {
      res
        .status(404)
        .json({ status: "not found", code: 404, message: "Not found" });
    }
  } catch (err) {
    return err;
  }
});

router.patch("/:heroId", async (req, res, next) => {
  try {
    const foundHero = await getById(req.params.heroId);
    if (foundHero) {
      await updateHero(req.params.heroId, req.body);
      const updatedHero = await getById(req.params.heroId);
      res
        .status(200)
        .json({ status: "Updated Successful", code: 200, data: updatedHero });
    }
    res.status(400).json({ status: "Failed", code: 400, message: "Not Found" });
  } catch (err) {
    return err;
  }
});

module.exports = router;
