import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr('string'),

    description: DS.attr('string'),

    order: DS.attr('number'),

    creationDate: DS.attr('date'),

    column: DS.belongsTo('column')
});
