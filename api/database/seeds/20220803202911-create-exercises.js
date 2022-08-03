'use strict';

const exerciseFactory = require('./helper/exercise-factory');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('exercise', [
      // Peitoral
      exerciseFactory.createExercise("Supino Reto",
       "O supino reto consiste essencialmente em uma flexão de ombro horizontal seguida por uma extensão de cotovelo — movimentos potencializados pela carga na barra. Os três principais músculos recrutados são o peitoral maior, tríceps braquial e deltóide. Além disso, o peitoral menor também é solicitado como um estabilizador do movimento.",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNz-aMWHa_gGMHwVUMd1_JNjTcT8YRcK3gZg&usqp=CAU",
        "https://www.youtube.com/watch?v=sqOw2Y6uDWQ&ab_channel=LeandroTwin",
        null,
        1),
      // Costas
      exerciseFactory.createExercise("Remada Curvada",
       "A remada curvada é um exercício que trabalha toda a parte dorsal do tronco e é realizada por meio de três movimentos: extensão do ombro, adução escapular e flexão do cotovelo.",
        "https://www.queroviverbem.com.br/wp-content/uploads/2019/06/Remada-curvada2.jpg",
        "https://www.youtube.com/watch?v=mxvS-iwm53o&ab_channel=FisioprevcomGuilhermeStellbrink",
        null,
        2),
      // Pernas
      exerciseFactory.createExercise("Agachamento Livre",
       "O agachamento livre é um exercício físico que treina principalmente os músculos das coxas, nádegas, quadris, músculos quadríceps femorais (vaso medial, vaso lateral, vaso intermédio e reto femoral), isquiotibias, o fortalecimento dos ossos, ligamentos e inserção dos tendões em toda a parte inferior do corpo.",
        "http://conteudo.imguol.com.br/c/entretenimento/d0/2018/10/18/mulher-fazendo-agachamento-livre-com-barra-1539887183808_v2_1077x787.jpg",
        "https://www.youtube.com/watch?v=4TG8JdU6NPU&ab_channel=LeandroTwin",
        null,
        3),
      // Braços
      exerciseFactory.createExercise("Rosca Direta",
       "A rosca direta é um exercício que deve ser feito movendo a articulação do cotovelo, ocorrendo a flexão de cotovelo. Em pé, com os pés afastados dos ombros e joelhos pouco flexionados, segure a barra com os cotovelos esticados, contraindo o bíceps com o final do movimento e o cotovelo todo flexionado.",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNz-aMWHa_gGMHwVUMd1_JNjTcT8YRcK3gZg&usqp=CAU",
        "https://www.youtube.com/watch?v=nUSmTWGzOqA&ab_channel=MinhaVida",
        null,
        4),
      // Abdômen
      exerciseFactory.createExercise("Abdominal Remador",
       "Também conhecido como abdominal estilo militar, o abdominal remador trabalha diretamente os músculos do abdômen. Por não precisar de equipamentos, o movimento é simples e acessível, pois pode ser feito em qualquer lugar, especialmente em casa.",
        "https://aprovataf.com.br/wp-content/uploads/2016/10/ABDOMINAL-REMADOR.jpg",
        "https://www.youtube.com/watch?v=xvS-hw6dEGI&ab_channel=MiqueiasAlvesPersonal",
        null,
        5)
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exercise', null, {});
  }
};