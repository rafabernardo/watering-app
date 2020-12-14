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

    let test = new Date(acquisition_date).toISOString();
    let test1 = new Date().toISOString();

    await connection('plant').insert({
      name,
      species,
      locate,
      humidity_level,
      acquisition_date: test,
      watering_date: test1,
    });

    return res.json({ species });
  },

  async list(request, response) {
    const { page = 1 } = request.query;
  
    const [count] = await connection("plant").count();
  
    const plants = await connection("plant")
      .limit(5)
      .offset((page - 1) * 5)
      .select('*');
  
    response.header("X-Total-Count", count["count(*)"]);
    return response.json(plants);
  },
  
};


