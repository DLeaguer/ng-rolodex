exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('user_id').primary().notNullable();
    table.string('username').notNullable().unique();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.string('name');
    table.string('email');
    table.string('address');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
}