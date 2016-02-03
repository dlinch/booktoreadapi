
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments().primary().unsigned();
    table.string('title');
    table.specificType('winner', 'text[]');
    table.string('year');
    table.string('publisher');
    table.string('author_first');
    table.string('author_last');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book');
};
