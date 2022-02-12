const { Hero } = require("../db/heroesModel");

const listHeroes = async (page) => {
  return Hero.find({});
};

const getById = async (heroId) => {
  return Hero.findById(heroId);
};

const removeHero = async (heroId) => {
  await Hero.findByIdAndRemove(heroId);
  return true;
};
const addHero = async (body) => {
  // const {
  //   nickname,
  //   real_name,
  //   origin_description,
  //   superpowers,
  //   catch_phrase,
  //   Images,
  // } = body;
  //
  // await Hero.create({
  //   nickname,
  //   real_name,
  //   origin_description,
  //   superpowers,
  //   catch_phrase,
  //   Images,
  // });

  const newH = {
    nickname: body.nickname,
    real_name: body.real_name,
    origin_description: body.origin_description,
    superpowers: body.superpowers,
    catch_phrase: body.catch_phrase,
    Images: body.Images,
  };
  const newCreated = await Hero.create(newH);
  return newCreated;
};

const updateHero = async (heroId, body) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    Images,
  } = body;

  await Hero.findByIdAndUpdate(heroId, {
    $set: {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      Images,
    },
  });
};

module.exports = {
  listHeroes,
  getById,
  removeHero,
  addHero,
  updateHero,
};
