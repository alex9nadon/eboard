import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
/*
  name: attr('string'),

  creationDate: attr('date'),

  description: attr('string'),
*/
  user: belongsTo(),

  columns: hasMany()

});
