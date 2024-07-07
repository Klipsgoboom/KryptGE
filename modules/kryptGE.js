var spriteJson = '{}';
var spriteList = {};
var spritesCount = 0;

var startFunctions = '';

function startbtn() {
    previewAllowed = true;
    preview(document.getElementById('codeInputST').value + ' ' + document.getElementById('codeInputAST').value);
}

function startScreen() {
    preview(document.getElementById('codeInputST').value + ' |');
}

function updateSprites() {
    drawSquare();
}

function squareSprite() {
    var x = parseInt(document.getElementById('Sx').value);
    var y = parseInt(document.getElementById('Sy').value);
    var width = parseInt(document.getElementById('Swidth').value);
    var height = parseInt(document.getElementById('Sheight').value);
    
    spriteList = JSON.parse(spriteJson);
    
    var newSprite = {
        "x": x,
        "y": y,
        "width": width,
        "height": height
    };
    
    var spriteName = "sprite" + (spritesCount + 1);
    spriteList[spriteName] = newSprite;
    
    spriteJson = JSON.stringify(spriteList);
    spritesCount++;
    generateSpriteCode();
}

function generateSpriteCode() {
    startFunctions = ''; // Clear the startFunctions before generating
    document.getElementById('codeInputST').value = ''; // Clear the input field before appending
    for (var key in spriteList) {
        if (spriteList.hasOwnProperty(key)) {
            var sprite = spriteList[key];
            document.getElementById('codeInputST').value += 'sprite(' + sprite.x + ', ' + sprite.y + ', ' + sprite.width + ', ' + sprite.height + ') ';
        }
    }
}


function saveWhole() {
    saveToComputer('gameSave', 'kryptge', spriteJson + "|" + document.getElementById('codeInputAST').value)
}

function saveToComputer(filename, extension, data) {
    const blob = new Blob([data], { type: 'text/plain' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename + '.' + extension;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadGameSave() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;

        var parts = textFromFileLoaded.split('|')

        spriteJson = parts[0];
        spriteList = JSON.parse(parts[0]);
        spritesCount = Object.keys(spriteList).length;
        generateSpriteCode();

        document.getElementById('codeInputAST').value = parts[1]
    }; 
    fileReader.readAsText(fileToLoad, "UTF-8");
}

