import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Board ${i}`;
  },

  description(){
    return faker.lorem.sentences(2,2);
  },

  order(i){
    return i;
  },

  creationDate(){
    return faker.date.past(1);
  }

});
