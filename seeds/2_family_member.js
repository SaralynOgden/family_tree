/* eslint-disable camelcase, max-len */

'use strict';

exports.seed = function(knex) {
  return knex('family_member').del()
    .then(() => {
      return knex('family_member').insert([{
        id: 1,
        user_id: 1,
        first_name:'Saralyn',
        relationship:'Sister',
        image:'',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        user_id: 1,
        first_name:'Karl',
        relationship:'Brother',
        image:'',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        user_id: 2,
        first_name:'Riley',
        relationship:'Brother',
        image:'',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('family_member_id_seq', (SELECT MAX(id) FROM family_member));"
      );
    });
};
