'use strict';
const fs = require('fs');

module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'))
      .map((el, index) => {
        delete el.email
        return {
          ...el,
          UserId: index + 1,
          birthDay: '2000-01-01',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    return queryInterface.bulkInsert('Profiles', users)
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
