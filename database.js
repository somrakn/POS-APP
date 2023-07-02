const { Client } = require('pg');

const clicent = new Client('postgres://db_pos_kxek_user:AmHYVDllIpsKlWX5jciRZsMWR8nrM12R@dpg-cigci5tgkuvojj8l8d10-a.oregon-postgres.render.com/db_pos_kxek?ssl=true')

clicent.connect();

// clicent.query('Select * from customer', (err, re) => {
//     if(!err) {
//         return [];
//     }
//     else {
//         re.rows.map(row => row.user);
//     }
// })