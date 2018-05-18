exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('links').insert([
        {
          id: 1,
          url: 'httssddsfsfd',
          description: 'bla vla'
        },
        {
          id: 2,
          url: 'httssddsfsfd',
          description: 'bla vla'
        },
        {
          id: 3,
          url: 'httssddsfsfd',
          description: 'bla vla'
        }
      ]);
    });
};
