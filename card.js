class Card {

    constructor(canvas) {
        this.isShowing = false;
        this.isMatched = false;
        this.canvas = canvas;

        var that = this;

        canvas.addEventListener('click', function() {
            that.show();
        });
    }

    show() {
        let numberOfCardsShowing = cards.filter(function(item) {
            return item.isShowing === true;
        }).length;

        const context = this.canvas.getContext('2d');

        console.log('a card was clicked!!!');
        context.fillStyle = 'white';
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const randomAnimalIndex = Math.floor(Math.random() * animalImages.length); 

        var animalImageSource = animalImages[randomAnimalIndex];

        let image = new Image();
        image.src = animalImageSource;

        var that = this;

        image.onload = function() {
            context.drawImage(image, 0, 0, that.canvas.width, that.canvas.height);
            that.isShowing = true;

            if (numberOfCardsShowing === 1) {
                setTimeout(function() {
                    cards.forEach(function(card) {
                        card.hide();
                    });
                }, 2000);
            }
        }
    }

    hide() {
        const context = this.canvas.getContext('2d');
        
        context.fillStyle = 'blue';
        context.fillRect(0, 0, this.canvas.width, this.canvas.height); 

        this.isShowing = false;
    }
}