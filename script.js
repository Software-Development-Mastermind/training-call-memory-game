const canvases = document.getElementsByClassName('card');

for (let i = 0; i < canvases.length; i++) {
    const canvas = canvases[i];
    const context = canvas.getContext('2d');

    context.fillStyle = 'blue';
    context.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener('click', function() {
        console.log('a card was clicked!!!');
        context.fillStyle = 'red';
        context.fillRect(0, 0, canvas.width, canvas.height);
    });
}