"use strict";

// const express = require("express");
// const app = express();
//
// const posts = [
//     {
//         title:  "lorem ipsum1",
//         text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elitconsectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     },
//     {
//         title:  "lorem ipsum2",
//         text: "Lorem ipsum dolor sit amet  Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     },
//     {
//         title:  "lorem ipsum3",
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     },
//     {
//         title:  "lorem ipsum4",
//         text: "Lorem ipsum dolor sitLorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Pariatur fugit fuga ut voluptas nostrum ullam eum accusantium consequuntur necessitatibus dolores. Pariatur hic officiis numquam ipsam perspiciatis officia maxime iusto vitae."
//     }
// ];
//
//
// const bodyParser = require('body-parser');
//
// app.get('/posts', function(req, res) {
//     return res.send(posts);
// });
//
// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());
//
// app.get('/posts/:id', function(req, res) {
//     const id = req.params.id;
//     res.send(posts[id]);
// });
//
// app.post('/posts', function(req, res) {
//     // получаем данные из тела запроса и сохраняем в конст.
//     const data = req.body;
//     // посмотрим что у нас там?
//     console.log(data);
//     // добавляем полученные данные к постам
//     posts.push(data);
//     // чтобы не было бесконечного цикла - вернем все посты на страницу
//     return res.send(posts);
// });
//
// app.listen(3000, ()=> console.log('Server running on 3000 port'));

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test1');
//
// const Cat = mongoose.model('Cat', { name: String });
//
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


var arr = [1, 2, 3, 4, 5, 6];
var result = arr.map(function (el) {
  return el * 3;
});
console.log(result);