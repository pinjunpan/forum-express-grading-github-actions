'use strict'
const faker = require('faker')
const axios = require('axios')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await queryInterface.sequelize.query(
      'SELECT id FROM Categories;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    )

    const { data } = await axios.get('https://api.pexels.com/v1/search', {
      headers: {
        Authorization: process.env.PEXELS_API_KEY
      },
      params: {
        query: 'restaurant',
        per_page: 50,
        page: 1
      }
    })
    const photos = data.photos

    await queryInterface.bulkInsert('Restaurants',
      Array.from({ length: 50 }, (_, i) => ({
        name: faker.company.companyName(),
        tel: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        opening_hours: '08:00',
        image: photos[i]?.src?.medium || '',
        description: faker.lorem.text(),
        created_at: new Date(),
        updated_at: new Date(),
        category_id: categories[Math.floor(Math.random() * categories.length)].id
      }))
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Restaurants', {})
  }
}
