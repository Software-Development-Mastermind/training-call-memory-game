const animalImages = [ 'images/pig.jpg', 'images/cow.png', 'images/dog.png' ];

const cards = [];

const canvases = document.getElementsByClassName('card');

for (let i = 0; i < canvases.length; i++) {
    var card = new Card(canvases[i]);  
    
    cards.push(card);    

    card.hide();
}