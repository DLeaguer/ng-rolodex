
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'avril', name: 'Avril Lavigne', email: 'avril@gmail.com', address: '111 Oahu St.'},
        {username: 'taylor', name: 'Taylor Swift', email: 'taylor@gmail.com', address: '222 Maui St.'},
        {username: 'katy', name: 'Katy Perry', email: 'katy@gmail.com', address: '333 Kauai St.'},
      ]);
    });
};
