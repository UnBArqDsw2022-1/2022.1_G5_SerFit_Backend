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
    
    const THUMBS_DIR = __dirname+ '/../../public/assets/thumbs_examples';
    const jussaraThumb = fs.readFileSync(`${THUMBS_DIR}/jussara-rodrigues.jpg`);
    const takeshiThumb = fs.readFileSync(`${THUMBS_DIR}/sergio-takeshi.jpg`);
    const saraivaThumb = fs.readFileSync(`${THUMBS_DIR}/silvia-saraiva.jpg`);
    const carvalhoThumb = fs.readFileSync(`${THUMBS_DIR}/bento-carvalho.jpg`);

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
          createdAt: new Date(), 
          updatedAt: new Date(),
          thumbnail: jussaraThumb
        },
        {
          password: "55662211", 
          email: "roberto.fernando@bola.com.br", 
          name: "Roberto Fernando Fonseca", 
          accountType: "client", 
          mainInterest: "academia",
          age: 55,
          about: 'Tem que estar bem para as novinhas', 
          createdAt: new Date(), 
          updatedAt: new Date(),
          thumbnail: takeshiThumb
        },
        {
          password: "password1234", 
          email: "jussara2008@uolou.com.br", 
          name: "Jussara Mendes", 
          accountType: "client", 
          mainInterest: "natacao",
          age: 24,
          about: 'Me sinto uma sereia kkk',
          thumbnail: jussaraThumb,
          createdAt: new Date(), 
          updatedAt: new Date(),
        },
        {
          password: "54332445", 
          email: "clara.faria@email.com.br", 
          name: "Clara Faria Alves", 
          accountType: "client", 
          mainInterest: "academia",
          age: 22,
          about: 'Quero ficar bombada',
          thumbnail: carvalhoThumb
        },
        {
          password: "SenhaBoa", 
          email: "gustevezinho123@email.com.br", 
          name: "Gustave Persejin", 
          accountType: "client", 
          mainInterest: "trilha",
          age: 21,
          about: 'Gosto de sair para ver o céu'
        },
        {
          password: "feijaocomarroz", 
          email: "Takeshisergio@unb.com.br", 
          name: "Sergio Takeshi", 
          accountType: "personal", 
          mainInterest: "musculacao",
          age: 27,
          about: 'Um corpo saudável para uma mente saudável',
          thumbnail: carvalhoThumb,
        },
        {
          password: "joaoDaSenhaBoa", 
          email: "joaobonitaoemail.com", 
          name: "Joao Leao", 
          accountType: "personal", 
          mainInterest: "natacao",
          age: 43,
          about: 'Melhor professor da minha rua',
          thumbnail: saraivaThumb,
        },
        {
          password: "avengedSevenfold", 
          email: "alfonsoelriczinho@gmail.com", 
          name: "Afonso Elric", 
          accountType: "personal", 
          mainInterest: "danca",
          age: 60,
          about: 'Melhor dancarino de Brasilia!',
          thumbnail: takeshiThumb,
          createdAt: new Date(), 
          updatedAt: new Date(),
        },
        {
          password: "123456", 
          email: "cleitonrasta@gmail.com", 
          name: "Cleiton Rasta", 
          accountType: "personal", 
          mainInterest: "musculacao",
          age: 29,
          about: 'Academia e minha paixao',
          thumbnail: jussaraThumb,
        },
        {
          password: "victinho123", 
          email: "victao123@email.com", 
          name: "Victor Dias", 
          accountType: "personal", 
          mainInterest: "spining",
          age: 74,
          about: 'Acredito que o esporte muda vidas'
        },
      ], {transaction: tr});
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('user', null, {});
  }
};
