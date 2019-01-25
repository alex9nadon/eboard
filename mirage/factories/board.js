import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Board ${i}`;
  },

  creationDate(){
    return faker.date.past(1);
  },

  description(){
    return faker.lorem.sentences(3,3);
  }

});
