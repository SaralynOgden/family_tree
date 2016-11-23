'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('family_member', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.string('first_name').notNullable().defaultTo('');
    table.string('relationship').notNullable();
    table.string('image');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('family_member');
};
