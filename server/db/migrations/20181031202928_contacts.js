exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table) {
    table.increments('id').primary().notNullable();
    table.string('name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
    table.string('address');
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('email');
    table.string('twitter');
    table.string('instagram');
    table.string('github');
    //Create the column then add foreign key
    table.integer('created_by').unsigned().notNullable();
    table.foreign('created_by').references('id').inTable('users');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
}