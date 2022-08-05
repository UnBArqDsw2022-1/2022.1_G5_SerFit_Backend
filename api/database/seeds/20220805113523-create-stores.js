'use strict';

const StoreBuilder = require('../helper/store-builder');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('store', [
      new StoreBuilder()
      .setName("Growth Supplements")
      .setDescription("Se você quer economizar na compra dos seus suplementos, a G Suplementos é o lugar certo. Ao comprar à vista pelo site, você já garante 10% de desconto. Além disso, os suplementos são produzidos com alta qualidade e não passam por representantes, revendedores e lojistas até chegar à sua casa. Você compra direto da G Suplementos, fabricante de referência no mercado, e aproveita um preço que é muito mais barato. O foco é a qualidade e os produtos levam o que existe de melhor em matéria-prima. E não tenha medo, os suplementos Growth passam por baterias rigorosas de análise em nosso laboratório interno e nos laboratórios parceiros (ALAC e LABCAL). Com o suplemento certo você está um passo à frente na busca pelos seus objetivos. Vai ficar de fora?")
      .setThumbnailUrl("https://cdn.picodi.com/br/files/shop-description/g/growth-supplements/logo.png")
      .setWebsiteUrl("https://www.gsuplementos.com.br/")
      .build(),
      new StoreBuilder()
      .setName("Nutrata")
      .setDescription("A confiança e a credibilidade da NUTRATA vem com a experiência de mais de 27 anos do grupo Vaccaro aliada a experiência de profissionais do mercado de suplementação nutricional e farmacêutico. A união desses profissionais e a estrutura que a marca possui hoje fazem da NUTRATA uma das maiores empresas de suplementação do Brasil. Nosso objetivo maior é atingir todos os tipos de público que buscam uma qualidade de vida melhor ou que necessitam de produtos específicos e de alta performance.")
      .setThumbnailUrl("https://nutrata.com.br/wp-content/uploads/2022/04/nutrata-seo.png")
      .setWebsiteUrl("https://nutrata.com.br/")
      .build(),
      new StoreBuilder()
      .setName("Bio Mundo")
      .setDescription("Saúde bem estar para sua vida. Fundada por Edmar Mothé, que possui mais de 40 anos de experiência no varejo, a Rede de lojas Bio Mundo opera no segmento de produtos naturais e está presente em 17 estados brasileiros. A empresa promove saúde e bem estar oferecendo o mix de produtos mais completo do Brasil, incluindo produtos diet, light, integrais, veganos, funcionais, sem glúten, sem lactose e suplementos vitamínicos e esportivos.")
      .setThumbnailUrl("https://biomundo.com.br/wp-content/uploads/2022/07/Bio1.png")
      .setWebsiteUrl("https://biomundo.com.br/")
      .build(),
      new StoreBuilder()
      .setName("Dux Nutrition")
      .setDescription("Dentro de cada um de nós há um espírito capaz de superar barreiras e limites humanos. Triatletas nadam, pedalam e correm distâncias inimagináveis. Halterofilistas são capazes de levantar o triplo de seus próprios pesos. Alpinistas escalam paredes e montanhas para alcançar os lugares mais inacessíveis do planeta. Indivíduos abandonam vícios e mudam de hábitos para perder peso e buscar uma vida mais saudável. Jovens tem disposição para estudar, trabalhar, sair com os amigos e treinar, tudo no mesmo dia. Somos todos capazes de realizar feitos sobre-humanos. Para nós, conseguir proporcionar desempenho, saúde e bem-estar é uma oportunidade única de contribuir efetivamente na vida das pessoas. Por isso, desenvolver suplementos é muito mais do que o nosso trabalho. É nosso compromisso.")
      .setThumbnailUrl("https://s3.amazonaws.com/gupy5/production/socialmedias/695/20191101072326294DUX_LogoDUX_01.jpg")
      .setWebsiteUrl("https://www.duxnutrition.com/")
      .build()
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('store', null, {});
  }
};
