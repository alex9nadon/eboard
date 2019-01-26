import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('boards');
  this.route('board', { path: '/board/:id' });

  this.route('users');
  this.route('user', { path: '/user/:id' });

  this.route('cards');
  this.route('card', { path: '/card/:id' });

  this.route('columns');
  this.route('column', { path: '/column/:id' });

  this.route('eboard', { path: '/eboard/:id' });
});

export default Router;
