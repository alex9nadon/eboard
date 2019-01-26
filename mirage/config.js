export default function() {

  //this.namespace = 'api';

  this.get('/users');

  this.get('/users/:id');

  this.get('/boards', (schema) => {
    return schema.boards.all();
  });

  this.get('/columns', (schema) => {
    return schema.columns.all();
  });

  this.get('/cards', (schema) => {
    return schema.cards.all();
  });

  this.get('/boards/:id', (schema, request) => {
    var id = request.params.id;
    return schema.boards.find(id);
  })

  this.get('/cards/:id', (schema, request) => {
    var id = request.params.id;
    return schema.cards.find(id);
  })

  this.get('/columns/:id', (schema, request) => {
    var id = request.params.id;
    return schema.columns.find(id);
  })
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
}
