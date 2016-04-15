
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('cats').del(), 

    // Inserts seed entries
    knex('cats').insert({name: 'Fluffy'}),
    knex('cats').insert({name: 'Sprinkles'}),
    knex('cats').insert({name: 'Elmo'})
  );
};
