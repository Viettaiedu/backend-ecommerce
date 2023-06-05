"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Variations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.ENUM,
        values: ["color", "capacity"],
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Variations");
  },
};