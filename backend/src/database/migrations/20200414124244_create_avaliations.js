exports.up = function(knex) {
    return knex.schema.createTable('avaliations', function (table) {
        table.increments('id');
        table.string('admin_id').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('ra').notNullable();
        table.string('description').notNullable();
    })
  };
  
exports.down = function(knex) {
    return knex.schema.dropTable('avaliations');
};
  