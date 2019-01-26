import Route from '@ember/routing/route';

export default Route.extend({
  model() {
      return this.store.findAll('user', {
        include: 'boards.columns.cards'
      });
    }
});
