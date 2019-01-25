export default function(server) {

  server.createList('user', 5);
  server.createList('board', 10);
  server.createList('column', 50);
  server.createList('card', 100);

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
