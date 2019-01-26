import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Column ${i}`;
  },

  description(){
    return faker.lorem.sentences(2,2);
  },

  order(i){
    return i;
  },

  actualDate(){
    return faker.date.past(1);
  },

  scheduledDate(){
    return faker.date.past(1);
  },

  completedDate(){
    return faker.date.past(1);
  },

  creationDate(){
    return faker.date.past(1);
  },

  priority(){
    return faker.random.number(3);
  },

  note(){
    return faker.lorem.sentences(3,3);
  }

});
