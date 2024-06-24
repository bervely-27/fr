function changeColor(color) { console.log('cliked');
    var color = ['green', 'blue', 'yellow', 'purple', 'pink'];
    var setColor = color[Math.floor(Math.random() * color.length)];
    console.log(setColor)
    const elem = document.getElementById("box-color");
    elem.style.backgroundColor= setColor;
}

