const imagesLink = ['memes/0.jpg', 'memes/1.jpg', 'memes/2.png', 'memes/3.jpg', 'memes/5.jpg', 'https://www.rateameme.com/wp-content/uploads/2019/01/f0mjx96sd7d21.jpg', 'memes/6.jpg', 'memes/7.jpg', 'memes/8.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjp18ObB-C0QCjDKAvxaeNABFisodjcEC0-jwgKEZrQ6F9xe7&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptcrsjQYM2ps77OqrRoR-BoQGFCKIy9HYHvelZ6Ftb-aA09Vy&s', 'memes/9.jpg', 'memes/91.webp','memes/92.jpg','https://i.kym-cdn.com/photos/images/newsfeed/001/504/739/5c0.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13h4GyOQ3gD4qkCsJq-iGcnFY9y6S8TAnqBP6ZX_qByjgOfoL7w&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKEnSZ72tRpIooyG2-viYLCiu5YiK2GkP5ozujz-NqehRn70Ei3A&s', 'https://images3.memedroid.com/images/UPLOADED60/5cebaaacc20a6.jpeg', 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/1/asset/buzzfeed-prod-fastlane-01/sub-buzz-22884-1513923367-1.png?crop=592:439;0,0&downsize=700:*&output-format=auto&output-quality=auto', 'https://static.boredpanda.com/blog/wp-content/uploads/2019/05/season-8-episode-4-game-of-thrones-got-memes-64-5cd142fa9ab5f__700.jpg', 'https://media.thetab.com/blogs.dir/90/files/2019/05/text-document-idcards-collage-poster-advertisement-human-person.jpeg']

let imageTags = imagesLink.map(x => `<img src="${x}" loading="lazy" class="masonry-content" data-aos="fade-up">`).join('');
console.log('wokring');
console.log(imageTags);
document.getElementById('image-container').innerHTML = imageTags;