'use strict';

const activityFactory = require('./helper/activity-factory');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('activity', [
      activityFactory.createActivity("Zumba",
       "Zumba é um programa de fitness inspirado principalmente pela dança latina criado na Colômbia pelo coreógrafo Beto Pérez, na década de 1990. O programa foi implementado em mais de 150 países",
        "https://conteudo.imguol.com.br/c/entretenimento/c1/2016/10/04/zumba-danca-1475607275131_v2_900x506.jpg",
        "https://www.youtube.com/watch?v=vCFNlbW5BqI&ab_channel=ZumbaAer%C3%B3bica",
        null),
        activityFactory.createActivity("Boxe",
       "O boxe ou pugilismo é um esporte de combate e arte marcial, no qual os lutadores usam apenas os punhos, tanto para a defesa, quanto para o ataque. Boxeadores se trocam golpes por um tempo predeterminado em um número de rodadas em uma arena elevada cercada de cordas, o Ringue.",
        "https://static1.conquistesuavida.com.br/articles/4/55/44/@/17904-o-boxe-e-atualmente-uma-das-atividades-1200x630-3.jpg",
        "https://www.youtube.com/watch?v=CqKh4k5rgr4&ab_channel=CoachJulianoMatos",
        null),
        activityFactory.createActivity("Spinning",
       "O ciclismo indoor, muitas vezes chamado de spinning, é uma forma de exercício com aulas focadas em resistência, força, intervalos, alta intensidade e recuperação, e envolve o uso de uma bicicleta ergométrica estacionária especial com um volante ponderado em uma sala de aula.",
        "https://blog.ciaathletica.com.br/wp-content/uploads/2020/02/spinning-1.jpg",
        "https://www.youtube.com/watch?v=uhqGxNbWTkk&ab_channel=Exerc%C3%ADcioemCasa",
        null),
        activityFactory.createActivity("Funcional",
       "O treinamento funcional é uma classificação de exercícios que envolvem treinar o corpo para desenvolver capacidades funcionais necessárias às atividades da vida diária, como saltar, agachar, empurrar, puxar, correr, levantar e arremessar.",
        "https://blogeducacaofisica.com.br/wp-content/uploads/2017/06/treino-funcional.jpg",
        "https://www.youtube.com/watch?v=GhZGxW_8sQo&ab_channel=BOAFORMA",
        null)
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('activity', null, {});
  }
};
