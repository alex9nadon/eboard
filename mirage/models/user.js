import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
/*
  name: attr('string'),

  avatar: attr('string'),
  */
  boards: hasMany()

});
