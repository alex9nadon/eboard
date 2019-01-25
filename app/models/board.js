import DS from 'ember-data';

export default DS.Model.extend({

    name: DS.attr('string'),

    creationDate: DS.attr('date'),

    description: DS.attr('string'),

    user: DS.belongsTo(),

    columns: DS.hasMany()

});
