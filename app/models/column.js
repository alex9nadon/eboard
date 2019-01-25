import DS from 'ember-data';

export default DS.Model.extend({

   name: DS.attr('string'),

   description: DS.attr('string'),

   order: DS.attr('number'),

   actualDate: DS.attr('date'),

   scheduledDate: DS.attr('date'),

   completedDate: DS.attr('date'),

   creationDate: DS.attr('date'),

   priority: DS.attr('number'),

   note: DS.attr('string'),

   board: DS.belongsTo(),

   cards: DS.hasMany()
});
