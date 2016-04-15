exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function(table) {
   table.increments() 
   table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
};