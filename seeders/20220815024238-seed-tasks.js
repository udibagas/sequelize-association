'use strict';
const fs = require('fs');

module.exports = {
  up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  
    const tasks = JSON.parse(fs.readFileSync('./data/tasks.json', 'utf-8'))
      .map(el => {
        return {
          title: el.name,
          status: el.status,
          UserId: el.UserId,
          dueDate: '2022-08-16',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    return queryInterface.bulkInsert('Tasks', tasks)
  },

  down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Tasks')
  }
};
