const animalImages = [ 'images/pig.jpg', 'images/cow.png', 'images/dog.png' ];

const cards = [];

const canvases = document.getElementsByClassName('card');

for (let i = 0; i < canvases.length; i++) {
    const canvas = canvases[i];
    const context = canvas.getContext('2d');

    context.fillStyle = 'blue';
    context.fillRect(0, 0, canvas.width, canvas.height);  

    var card = createCard(canvas);  
    cards.push(card);
    console.log(cards);    
}

function createCard(canvas) {
    const card = {
        isShowing: false,
        isMatched: false
    }

    card.show = function() {
        let numberOfCardsShowing = cards.filter(function(item) {
            return item.isShowing === true;
        }).length;

        const context = canvas.getContext('2d');

        console.log('a card was clicked!!!');
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);

        const randomAnimalIndex = Math.floor(Math.random() * animalImages.length); 

        var animalImageSource = animalImages[randomAnimalIndex];

        let image = new Image();
        image.src = animalImageSource;

        image.onload = function() {
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            card.isShowing = true;

            if (numberOfCardsShowing === 1) {
                setTimeout(function() {
                    cards.forEach(function(card) {
                        card.hide();
                    });
                }, 2000);
            }
        }
    }

    card.hide = function() {
        const context = canvas.getContext('2d');
        
        context.fillStyle = 'blue';
        context.fillRect(0, 0, canvas.width, canvas.height); 

        card.isShowing = false;
    }

    canvas.addEventListener('click', function() {
        card.show();
    });

    return card;
}