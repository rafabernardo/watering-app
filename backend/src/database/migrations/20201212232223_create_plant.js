exports.up = function (knex) {
  return knex.schema.createTable('plant', function (table) {
    table.increments('id').primary();
    table.string('species').notNullable();
    table.string('locate').notNullable();
    table.integer('humidity_level');
    table.date('watering_date');
    table.date('acquisition_date');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ongs');
};
