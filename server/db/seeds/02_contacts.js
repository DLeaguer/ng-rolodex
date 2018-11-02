
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          name: 'Ed Sheeran', 
          address: '1 Ed Pl.', 
          mobile: '808-000-0001', 
          email: 'ed@gmail.com', 
          twitter: '@edsheeran', 
          instagram: '@teddysphotos', 
          created_by: 1
        },
        {
          name: 'Justin Timberlake', 
          address: '2 Justin Pl.', 
          mobile: '808-000-0002', 
          email: 'justin@gmail.com', 
          twitter: '@justintimberlake', 
          instagram: '@jtimberlake', 
          created_by: 2
        },
        {
          name: 'Adam Levine', 
          address: '3 Adam Pl.', 
          mobile: '808-000-0003', 
          email: 'adam@gmail.com', 
          twitter: '@adamlevine', 
          instagram: '@adamlevine', 
          created_by: 3
        },
        {
          name: 'Bruno Mars', 
          address: '4 Bruno Pl.', 
          mobile: '808-000-0004', 
          email: 'bruno@gmail.com', 
          twitter: '@brunomars', 
          instagram: '@brunomars', 
          created_by: 1
        },
        {
          name: 'Ariana Grande', 
          address: '5 Ariana Pl.', 
          mobile: '808-000-0005', 
          email: 'ariana@gmail.com', 
          twitter: '@arianagrande', 
          instagram: '@arianagrande', 
          created_by: 2
        },
        {
          name: 'Selena Gomez', 
          address: '6 Selena Pl.', 
          mobile: '808-000-0006', 
          email: 'selena@gmail.com', 
          twitter: '@selenagomez', 
          instagram: '@selenagomez', 
          created_by: 3
        }
      ]);
    });
};
