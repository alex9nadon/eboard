import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
/*
  name: attr('string'),

  description: attr('string'),

  order: attr('number'),

  creationDate: attr('date'),
*/
  column: belongsTo()


});
