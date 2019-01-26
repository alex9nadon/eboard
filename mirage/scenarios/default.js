export default function(server) {

  let card1 =  server.createList('card', 2);
  let column1 = server.create('column', { cards : card1 });

  let card2 =  server.createList('card', 3);
  let column2 = server.create('column', { cards: card2 });

  let card3 =  server.createList('card', 4);
  let column3 = server.create('column', { cards: card3 });

  let board1 = server.create('board', { columns:[column1,column2,column3] });
  //----------------------
  let card11 =  server.createList('card', 6);
  let column11 = server.create('column', { cards : card11 });

  let card22 =  server.createList('card', 2);
  let column22 = server.create('column', { cards: card22 });

  let card33 =  server.createList('card', 5);
  let column33 = server.create('column', { cards: card33 });
  let board2 = server.create('board', { columns:[column11,column22,column33] });


  server.create('user', { boards : [board1] });
  server.create('user', { boards : [board2] });


  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
