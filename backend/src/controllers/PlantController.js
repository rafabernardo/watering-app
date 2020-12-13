const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const {
      name,
      species,
      watering_date,
      humidity_level,
      acquisition_date,
      locate,
    } = req.body;

    await connection('plant').insert({
      name,
      species,
      locate,
      humidity_level,
      watering_date,
      acquisition_date,
    });

    return res.json({ species });
  },

  async list(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection('plant').count();
    const plants = await connection('plant')
      .select('*')
      .limit(5)
      .offset((page - 1) * 5);

      res.header("X-Total-Count", count["count(*)"]);
    return res.json(plants);
  },
};
