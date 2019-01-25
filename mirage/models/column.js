import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
 /*
  name: attr('string'),

  description: attr('string'),

  order: attr('number'),

  actualDate: attr('date'),

  scheduledDate: attr('date'),

  completedDate: attr('date'),

  creationDate: attr('date'),

  priority: attr('number'),

  note: attr('string'),*/

  board: belongsTo(),

  cards: hasMany()

});
