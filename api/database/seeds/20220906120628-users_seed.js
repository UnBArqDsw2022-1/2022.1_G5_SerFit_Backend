'use strict';
const fs = require('fs');

module.exports = {
  async up (queryInterface, _Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    const THUMBS_DIR = dirname__ + '../../public/assets/thumbs_examples';
    const jussaraThumb = fs.readFileSync(`${THUMBS_DIR}/jussara-maria.jpg`);
    const takeshiThumb = fs.readFileSync(`${THUMBS_DIR}/sergio-takeshi.jpg`);

    return queryInterface.sequelize.transaction(tr => {
      return queryInterface.bulkInsert('user', [
        {
          password: "12345678", 
          email: "DanielAlves@dannyboy.com", 
          name: "Daniel Alves", 
          accountType: "client", 
          mainInterest: "outros",
          age: 22,
          about: 'Gosto de curtir a Vida',
        },
        {
          password: "55662211", 
          email: "roberto.fernando@bola.com.br", 
          name: "Roberto Fernando Fonseca", 
          accountType: "client", 
          mainInterest: "academia",
          age: 55,
          about: 'Tem que estar bem para as novinhas',
        },
        {
          password: "password1234", 
          email: "jussara2008@uolou.com.br", 
          name: "Jussara Mendes", 
          accountType: "client", 
          mainInterest: "natacao",
          age: 24,
          about: 'Me sinto uma sereia kkk',
          thumbnail: jussaraThumb
        },
        {
          password: "feijaocomarroz", 
          email: "Takeshisergio@unb.com.br", 
          name: "Sergio Takeshi", 
          accountType: "personal", 
          mainInterest: "musculacao",
          age: 27,
          about: 'Um corpo saudável para uma mente saudável',
          thumbnail: takeshiThumb,
        }

      ], {transaction: tr});
    })
  },

  async down (queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('user', null, {});
  }
};
