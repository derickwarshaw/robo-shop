const productData = [
  {
    name: "Philippine",
    price: 39,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    imageUrl: "/images/robo-1.png",
    inventory: 1
  },
  {
    name: "Noble",
    price: 60,
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    imageUrl: "/images/robo-2.png",
    inventory: 8
  },
  {
    name: "Viva",
    price: 16,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    imageUrl: "/images/robo-3.png",
    inventory: 7
  },
  {
    name: "Amandy",
    price: 99,
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    imageUrl: "/images/robo-4.png",
    inventory: 6
  },
  {
    name: "Kincaid",
    price: 48,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    imageUrl: "/images/robo-5.png",
    inventory: 7
  },
  {
    name: "Pandora",
    price: 57,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    imageUrl: "/images/robo-6.png",
    inventory: 8
  },
  {
    name: "Cecile",
    price: 25,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    imageUrl: "/images/robo-7.png",
    inventory: 3
  },
  {
    name: "Chan",
    price: 25,
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    imageUrl: "/images/robo-8.png",
    inventory: 2
  },
  {
    name: "Fletch",
    price: 94,
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    imageUrl: "/images/robo-9.png",
    inventory: 4
  },
  {
    name: "Bea",
    price: 61,
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    imageUrl: "/images/robo-10.png",
    inventory: 6
  },
  {
    name: "Jasper",
    price: 82,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    imageUrl: "/images/robo-1.png",
    inventory: 1
  },
  {
    name: "Sharline",
    price: 88,
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    imageUrl: "/images/robo-2.png",
    inventory: 10
  },
  {
    name: "Ashley",
    price: 98,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    imageUrl: "/images/robo-3.png",
    inventory: 1
  },
  {
    name: "Jourdan",
    price: 43,
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    imageUrl: "/images/robo-4.png",
    inventory: 0
  },
  {
    name: "Kazz",
    price: 71,
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    imageUrl: "/images/robo-5.png",
    inventory: 10
  },
  {
    name: "Courtney",
    price: 98,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    imageUrl: "/images/robo-6.png",
    inventory: 7
  },
  {
    name: "Bear",
    price: 33,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    imageUrl: "/images/robo-7.png",
    inventory: 1
  },
  {
    name: "Ode",
    price: 82,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    imageUrl: "/images/robo-8.png",
    inventory: 4
  },
  {
    name: "Jan",
    price: 6,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    imageUrl: "/images/robo-9.png",
    inventory: 5
  },
  {
    name: "Debra",
    price: 81,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    imageUrl: "/images/robo-10.png",
    inventory: 7
  },
  {
    name: "Karine",
    price: 11,
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    imageUrl: "/images/robo-1.png",
    inventory: 7
  },
  {
    name: "Grazia",
    price: 14,
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    imageUrl: "/images/robo-2.png",
    inventory: 1
  },
  {
    name: "Hamish",
    price: 43,
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    imageUrl: "/images/robo-3.png",
    inventory: 7
  },
  {
    name: "Katherina",
    price: 19,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    imageUrl: "/images/robo-4.png",
    inventory: 4
  },
  {
    name: "Wallace",
    price: 50,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    imageUrl: "/images/robo-5.png",
    inventory: 9
  },
  {
    name: "Fawnia",
    price: 91,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    imageUrl: "/images/robo-6.png",
    inventory: 8
  },
  {
    name: "Felita",
    price: 37,
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    imageUrl: "/images/robo-7.png",
    inventory: 3
  },
  {
    name: "Eberhard",
    price: 25,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    imageUrl: "/images/robo-8.png",
    inventory: 1
  },
  {
    name: "Antoine",
    price: 68,
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    imageUrl: "/images/robo-9.png",
    inventory: 9
  },
  {
    name: "Artair",
    price: 87,
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    imageUrl: "/images/robo-10.png",
    inventory: 10
  },
  {
    name: "Wang",
    price: 83,
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    imageUrl: "/images/robo-1.png",
    inventory: 10
  },
  {
    name: "Todd",
    price: 57,
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    imageUrl: "/images/robo-2.png",
    inventory: 10
  },
  {
    name: "Ermentrude",
    price: 46,
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    imageUrl: "/images/robo-3.png",
    inventory: 4
  },
  {
    name: "Bell",
    price: 91,
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    imageUrl: "/images/robo-4.png",
    inventory: 7
  },
  {
    name: "Ely",
    price: 46,
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    imageUrl: "/images/robo-5.png",
    inventory: 2
  },
  {
    name: "Sharleen",
    price: 48,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    imageUrl: "/images/robo-6.png",
    inventory: 9
  },
  {
    name: "Loreen",
    price: 64,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    imageUrl: "/images/robo-7.png",
    inventory: 10
  },
  {
    name: "Cassandry",
    price: 87,
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    imageUrl: "/images/robo-8.png",
    inventory: 1
  },
  {
    name: "Giuseppe",
    price: 70,
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    imageUrl: "/images/robo-9.png",
    inventory: 6
  },
  {
    name: "Malena",
    price: 85,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    imageUrl: "/images/robo-10.png",
    inventory: 0
  },
  {
    name: "Alanna",
    price: 94,
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    imageUrl: "/images/robo-1.png",
    inventory: 1
  },
  {
    name: "Filberte",
    price: 48,
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    imageUrl: "/images/robo-2.png",
    inventory: 1
  },
  {
    name: "Kassia",
    price: 45,
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    imageUrl: "/images/robo-3.png",
    inventory: 1
  },
  {
    name: "Lani",
    price: 47,
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    imageUrl: "/images/robo-4.png",
    inventory: 6
  },
  {
    name: "Rafaelita",
    price: 56,
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    imageUrl: "/images/robo-5.png",
    inventory: 6
  },
  {
    name: "Devi",
    price: 29,
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    imageUrl: "/images/robo-6.png",
    inventory: 10
  },
  {
    name: "Galina",
    price: 32,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    imageUrl: "/images/robo-7.png",
    inventory: 4
  },
  {
    name: "Bernadine",
    price: 47,
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    imageUrl: "/images/robo-8.png",
    inventory: 6
  },
  {
    name: "Rogerio",
    price: 92,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    imageUrl: "/images/robo-9.png",
    inventory: 0
  },
  {
    name: "Sollie",
    price: 64,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    imageUrl: "/images/robo-10.png",
    inventory: 9
  },
  {
    name: "Reagan",
    price: 57,
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    imageUrl: "/images/robo-1.png",
    inventory: 7
  },
  {
    name: "Heriberto",
    price: 57,
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    imageUrl: "/images/robo-2.png",
    inventory: 5
  },
  {
    name: "Trevar",
    price: 44,
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    imageUrl: "/images/robo-3.png",
    inventory: 1
  },
  {
    name: "Dari",
    price: 71,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    imageUrl: "/images/robo-4.png",
    inventory: 9
  },
  {
    name: "Kleon",
    price: 98,
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    imageUrl: "/images/robo-5.png",
    inventory: 6
  },
  {
    name: "Kylie",
    price: 34,
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    imageUrl: "/images/robo-6.png",
    inventory: 8
  },
  {
    name: "Rahal",
    price: 48,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    imageUrl: "/images/robo-7.png",
    inventory: 10
  },
  {
    name: "Farly",
    price: 29,
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    imageUrl: "/images/robo-8.png",
    inventory: 2
  },
  {
    name: "Amargo",
    price: 20,
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    imageUrl: "/images/robo-9.png",
    inventory: 6
  },
  {
    name: "Juliet",
    price: 1,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    imageUrl: "/images/robo-10.png",
    inventory: 2
  },
  {
    name: "Halie",
    price: 47,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    imageUrl: "/images/robo-1.png",
    inventory: 1
  },
  {
    name: "Tedmund",
    price: 76,
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    imageUrl: "/images/robo-2.png",
    inventory: 3
  },
  {
    name: "Jenn",
    price: 28,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    imageUrl: "/images/robo-3.png",
    inventory: 1
  },
  {
    name: "Jerrylee",
    price: 87,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    imageUrl: "/images/robo-4.png",
    inventory: 8
  },
  {
    name: "Marty",
    price: 59,
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    imageUrl: "/images/robo-5.png",
    inventory: 3
  },
  {
    name: "Haleigh",
    price: 24,
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    imageUrl: "/images/robo-6.png",
    inventory: 6
  },
  {
    name: "Gustavus",
    price: 88,
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    imageUrl: "/images/robo-7.png",
    inventory: 10
  },
  {
    name: "Alano",
    price: 14,
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    imageUrl: "/images/robo-8.png",
    inventory: 2
  },
  {
    name: "Marlie",
    price: 76,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    imageUrl: "/images/robo-9.png",
    inventory: 2
  },
  {
    name: "Jojo",
    price: 18,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    imageUrl: "/images/robo-10.png",
    inventory: 6
  },
  {
    name: "Isac",
    price: 30,
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    imageUrl: "/images/robo-1.png",
    inventory: 7
  },
  {
    name: "Malcolm",
    price: 61,
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    imageUrl: "/images/robo-2.png",
    inventory: 0
  },
  {
    name: "Ulrica",
    price: 69,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    imageUrl: "/images/robo-3.png",
    inventory: 9
  },
  {
    name: "Susann",
    price: 52,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    imageUrl: "/images/robo-4.png",
    inventory: 10
  },
  {
    name: "Bonnee",
    price: 13,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    imageUrl: "/images/robo-5.png",
    inventory: 6
  },
  {
    name: "Ricardo",
    price: 7,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    imageUrl: "/images/robo-6.png",
    inventory: 5
  },
  {
    name: "Lucien",
    price: 18,
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    imageUrl: "/images/robo-7.png",
    inventory: 2
  },
  {
    name: "Mariette",
    price: 65,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    imageUrl: "/images/robo-8.png",
    inventory: 7
  },
  {
    name: "Shae",
    price: 16,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    imageUrl: "/images/robo-9.png",
    inventory: 2
  },
  {
    name: "Hillary",
    price: 33,
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    imageUrl: "/images/robo-10.png",
    inventory: 2
  },
  {
    name: "Harland",
    price: 56,
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    imageUrl: "/images/robo-1.png",
    inventory: 5
  },
  {
    name: "Rosco",
    price: 66,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    imageUrl: "/images/robo-2.png",
    inventory: 9
  },
  {
    name: "Basile",
    price: 82,
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    imageUrl: "/images/robo-3.png",
    inventory: 9
  },
  {
    name: "Katlin",
    price: 1,
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    imageUrl: "/images/robo-4.png",
    inventory: 5
  },
  {
    name: "Karlotta",
    price: 42,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    imageUrl: "/images/robo-5.png",
    inventory: 10
  },
  {
    name: "Anett",
    price: 1,
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    imageUrl: "/images/robo-6.png",
    inventory: 6
  },
  {
    name: "Zaria",
    price: 30,
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    imageUrl: "/images/robo-7.png",
    inventory: 7
  },
  {
    name: "Sayer",
    price: 31,
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    imageUrl: "/images/robo-8.png",
    inventory: 6
  },
  {
    name: "Frieda",
    price: 12,
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    imageUrl: "/images/robo-9.png",
    inventory: 8
  },
  {
    name: "Maude",
    price: 3,
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    imageUrl: "/images/robo-10.png",
    inventory: 4
  },
  {
    name: "Wilfred",
    price: 84,
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    imageUrl: "/images/robo-1.png",
    inventory: 7
  },
  {
    name: "Baird",
    price: 15,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    imageUrl: "/images/robo-2.png",
    inventory: 6
  },
  {
    name: "Riobard",
    price: 79,
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    imageUrl: "/images/robo-3.png",
    inventory: 3
  },
  {
    name: "Abe",
    price: 17,
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    imageUrl: "/images/robo-4.png",
    inventory: 4
  },
  {
    name: "Mary",
    price: 6,
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    imageUrl: "/images/robo-5.png",
    inventory: 4
  },
  {
    name: "Derry",
    price: 93,
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    imageUrl: "/images/robo-6.png",
    inventory: 10
  },
  {
    name: "Eadmund",
    price: 43,
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    imageUrl: "/images/robo-7.png",
    inventory: 1
  },
  {
    name: "Marie",
    price: 38,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    imageUrl: "/images/robo-8.png",
    inventory: 3
  },
  {
    name: "Ethan",
    price: 11,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    imageUrl: "/images/robo-9.png",
    inventory: 6
  },
  {
    name: "Pandora",
    price: 90,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    imageUrl: "/images/robo-10.png",
    inventory: 8
  }
];

const userData = [
  {
    firstName: "Kenny",
    lastName: "Farrent",
    email: "test",
    username: "kfarrent0",
    password:
      "11ba679415558be8b9a0b90008a60e7b2dd6a7a351cae380fc9a1ab9b1f287e9",
    isAdmin: true,
    salt: "m6cet2/3ZobfZu2NlWyJ7w=="
  },
  {
    firstName: "Nonie",
    lastName: "Tyrrell",
    email: "ntyrrell1@surveymonkey.com",
    username: "ntyrrell1",
    password: "78QuVIPAnZqM",
    isAdmin: false,
    salt: "YRVNg7"
  },
  {
    firstName: "Dominga",
    lastName: "Luttger",
    email: "dluttger2@fastcompany.com",
    username: "dluttger2",
    password: "Kz8B351",
    isAdmin: false,
    salt: "wdfoGxi7"
  },
  {
    firstName: "Kendall",
    lastName: "Attridge",
    email: "kattridge3@surveymonkey.com",
    username: "kattridge3",
    password: "c8cJpc",
    isAdmin: false,
    salt: "5w4qhNu"
  },
  {
    firstName: "Nellie",
    lastName: "Culwen",
    email: "nculwen4@infoseek.co.jp",
    username: "nculwen4",
    password: "DKJUii",
    isAdmin: false,
    salt: "4iZBiEkdqju"
  }
];

const reviewData = [
  {
    title:
      "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    rating: 3.8,
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    rating: 4.3,
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
  },
  {
    title:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    rating: 3.5,
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
  }
];

const sellerData = [
  { name: "Dazzlesphere" },
  { name: "Leenti" },
  { name: "Ainyx" }
];

const manufacturerData = [
  { name: "Buzzbean" },
  { name: "Plambee" },
  { name: "Twitterwire" }
];

const categoryData = [
  {
    name: "Alien Robots",
    imageUrl: "/images/alien-robot.png"
  },
  {
    name: "Battle Droids",
    imageUrl: "/images/battle-droid.png"
  },
  {
    name: "Fighter Robots",
    imageUrl: "/images/fighter-robot.png"
  },
  {
    name: "Flying Robots",
    imageUrl: "/images/flying-robot.png"
  },
  {
    name: "Household Robots",
    imageUrl: "/images/household-robot.png"
  },
  {
    name: "Human Cyborgs",
    imageUrl: "/images/human-cyborg.png"
  },
  {
    name: "Musical Robots",
    imageUrl: "/images/musical-robot.png"
  },
  {
    name: "Personal Robots",
    imageUrl: "/images/personal-robot.png"
  },
  {
    name: "Robot Parts",
    imageUrl: "/images/robot-parts.png"
  },
  {
    name: "Robot Tools",
    imageUrl: "/images/robot-tools.png"
  },
  {
    name: "Space Robots",
    imageUrl: "/images/space-robot.png"
  }
];

const cartData = [
  { guest: false, inventoryReq: 1 },
  { guest: false, inventoryReq: 1 },
  { guest: false, inventoryReq: 1 },
  { guest: false, inventoryReq: 1 },
  { guest: false, inventoryReq: 1 },
  { guest: false, inventoryReq: 1 }
];

const orderData = [
  {
    status: "Completed",
    email: "test",
    address: "213",
    state: "213",
    zip: 213,
    amount: 21,
    paymentConfirmed: false
  },
  {
    status: "Processing",
    email: "test",
    address: "213",
    state: "213",
    zip: 213,
    amount: 21,
    paymentConfirmed: false
  },
  {
    status: "Cancelled",
    email: "test",
    address: "213",
    state: "213",
    zip: 213,
    amount: 21,
    paymentConfirmed: false
  },
  {
    status: "Completed",
    email: "test",
    address: "213",
    state: "213",
    zip: 213,
    amount: 21,
    paymentConfirmed: false
  }
];

const orderHistoryData = [
  {
    productId: 3,
    productName: "Heriberto",
    productPrice: 57,
    productDesc:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    productImage: "/images/robo-1.png",
    inventorySold: 2
  },
  {
    productId: 4,
    productName: "Trevar",
    productPrice: 44,
    productDesc:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    productImage: "/images/robo-2.png",
    inventorySold: 3
  },
  {
    productId: 5,
    productName: "Dari",
    productPrice: 71,
    productDesc:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    productImage: "/images/robo-3.png",
    inventorySold: 4
  },
  {
    productId: 7,
    productName: "Heriberto",
    productPrice: 57,
    productDesc:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    productImage: "/images/robo-4.png",
    inventorySold: 2
  },
  {
    productId: 8,
    productName: "Trevar",
    productPrice: 44,
    productDesc:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    productImage: "/images/robo-5.png",
    inventorySold: 3
  },
  {
    productId: 9,
    productName: "Dari",
    productPrice: 71,
    productDesc:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    productImage: "/images/robo-6.png",
    inventorySold: 4
  },
  {
    productId: 10,
    productName: "Heriberto",
    productPrice: 57,
    productDesc:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    productImage: "/images/robo-7.png",
    inventorySold: 2
  },
  {
    productId: 11,
    productName: "Trevar",
    productPrice: 44,
    productDesc:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    productImage: "/images/robo-8.png",
    inventorySold: 3
  },
  {
    productId: 12,
    productName: "Dari",
    productPrice: 71,
    productDesc:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    productImage: "/images/robo-9.png",
    inventorySold: 4
  },
  {
    productId: 13,
    productName: "Heriberto",
    productPrice: 57,
    productDesc:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    productImage: "/images/robo-10.png",
    inventorySold: 2
  },
  {
    productId: 15,
    productName: "Trevar",
    productPrice: 44,
    productDesc:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    productImage: "/images/robo-11.png",
    inventorySold: 3
  },
  {
    productId: 17,
    productName: "Dari",
    productPrice: 71,
    productDesc:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    productImage: "/images/robo-12.png",
    inventorySold: 4
  }
];

module.exports = {
  productData,
  userData,
  reviewData,
  sellerData,
  manufacturerData,
  categoryData,
  cartData,
  orderData,
  orderHistoryData
};
