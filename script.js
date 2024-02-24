function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelectorAll('.item').forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomColor();
    });
    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});

document.querySelectorAll('.item').forEach(function(item) {
    const p = item.querySelector('p');
    const img = item.querySelector('img');

    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = getRandomColor();
        p.style.color = 'white';
        img.style.filter = 'invert(100%)';
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        p.style.color = '';
        img.style.filter = '';
    });
});

